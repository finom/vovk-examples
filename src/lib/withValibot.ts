import { toJsonSchema } from '@valibot/to-json-schema';
import { createStandardValidation } from 'vovk/mjs/index.js';

export const withValibot = createStandardValidation({
  toJSONSchema: (model) =>
    toJsonSchema(model, {
      overrideSchema(context) {
        if (context.valibotSchema.type === 'file') {
          return { type: 'string', format: 'binary' };
        }
      },
    }),
});