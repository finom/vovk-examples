import { prefix, get } from 'vovk';
import { openapi, fromSchema } from 'vovk-openapi';
import { fullSchema } from 'vovk-client/fullSchema';

@prefix('openapi')
export default class OpenapiController {
  @openapi({
    summary: 'OpenAPI spec',
    description: 'Get the OpenAPI spec for the examples API',
  })
  @get('spec.json')
  static getSpec = async () => {
    return fromSchema('api', fullSchema, {
      info: {
        title: 'Vovk examples API',
        description: 'API for https://vovk-examples.vercel.app/',
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT',
        },
        version: '1.0.0',
      },
    });
  };
}
