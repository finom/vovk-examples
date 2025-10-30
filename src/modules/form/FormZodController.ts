import { z } from 'zod';
import { prefix, post, operation, type VovkOutput } from 'vovk';
import { withZod } from 'vovk-zod';

@prefix('form-zod')
export default class FormZodController {
  @operation({
    summary: 'Submit form (Zod)',
    description: 'Submit form with Zod validation',
  })
  @post('{id}')
  static submitForm = withZod({
    isForm: true,
    body: z
      .object({
        email: z.email().meta({ description: 'User email' }),
        resume: z
          .file()
          .meta({ description: 'Resume file', examples: ['application/pdf'] }),
        portfolioSamples: z.union([z.array(z.file()), z.file()]).meta({ description: 'Portfolio samples' }),
      })
      .meta({ description: 'User object' }),
    params: z.object({
      id: z.uuid().meta({ description: 'User ID' }),
    }),
    output: z
      .object({
        email: z.email().meta({ description: 'User email' }),
        resume: z.object({
          name: z.string().meta({ description: 'Resume file name', examples: ['resume.pdf'] }),
          size: z.number().min(0).meta({ description: 'Resume file size' }),
          type: z.string().meta({ description: 'Resume file type', examples: ['application/pdf'] }),
        }),
        portfolioSamples: z
          .object({
            name: z.string().meta({ description: 'Portfolio sample file name', examples: ['portfolio.zip'] }),
            size: z.number().min(0).meta({ description: 'Portfolio sample file size' }),
            type: z.string().meta({ description: 'Portfolio sample file type', examples: ['application/zip'] }),
          })
          .array()
          .meta({ description: 'Array of portfolio sample files' }),
      })
      .meta({ description: 'Response object' }),
    async handle(req, { id }) {
      const { resume, portfolioSamples, email } = await req.vovk.form();

      return {
        email,
        resume: {
          name: resume.name,
          size: resume.size,
          type: resume.type,
        },
        portfolioSamples: (Array.isArray(portfolioSamples) ? portfolioSamples : [portfolioSamples]).map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
      } satisfies VovkOutput<typeof FormZodController.submitForm>;
    },
  });
}
