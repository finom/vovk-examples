import { prefix, get, operation, JSONLinesResponder } from 'vovk';
import JSONLinesResponderService, { type Token } from './JSONLinesResponderService.ts';

@prefix('jsonlines-responder')
export default class JSONLinesResponderController {
  @operation({
    summary: 'Stream tokens using Response object',
    description: 'Stream tokens to the client using Response object',
  })
  @get('tokens', { cors: true }) // CORS for OPTIONS Next.js route handler
  static async streamTokens(req: Request) {
    const response = new JSONLinesResponder<Token>(req, ({ headers, readableStream }) => new Response(readableStream, {
      headers: {
        // CORS for GET
        'Access-Control-Allow-Origin': 'https://vovk.dev',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Authorization',
        ...headers,
      },
    }));

    void JSONLinesResponderService.streamTokens(response);

    return response;
  }
}
