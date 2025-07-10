import { prefix, get, openapi, vovkSchemaToOpenAPI } from 'vovk';
import { schema } from 'vovk-client/schema';

@prefix('openapi')
export default class OpenApiController {
  @openapi({
    summary: 'OpenAPI spec',
    description: 'Get the OpenAPI spec for the examples API',
  })
  @get('spec.json')
  static getSpec = async () => {
    return vovkSchemaToOpenAPI({
      rootEntry: 'api',
      schema,
      openAPIObject: {
        info: {
          title: 'Vovk examples API',
          description: 'API for https://vovk-examples.vercel.app/',
          license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
          },
          version: '1.0.0',
        },
      },
    });
  };
}
