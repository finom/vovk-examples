import { HttpException, HttpStatus, post, prefix, type VovkRequest } from 'vovk';
import { openapi } from 'vovk-openapi';
import { streamText, type CoreMessage } from 'ai';
import { openai } from '@ai-sdk/openai';

@prefix('ai-sdk')
export default class AiSdkController {
  @openapi({
    summary: 'Vercel AI SDK',
    description:
      'Uses [@ai-sdk/openai](https://www.npmjs.com/package/@ai-sdk/openai) and ai packages to chat with an AI model',
    'x-codeSamples': [
      {
        label: 'AI SDK',
        lang: 'typescript',
        source: `xxxx`,
      },
    ],
  })
  @post('chat')
  static async chat(req: VovkRequest<{ messages: CoreMessage[] }>) {
    const { messages } = await req.json();
    const LIMIT = 5;

    if (messages.filter(({ role }) => role === 'user').length > LIMIT) {
      throw new HttpException(HttpStatus.BAD_REQUEST, `You can only send ${LIMIT} messages at a time`);
    }

    return streamText({
      model: openai('gpt-4o-mini'),
      system: 'You are a helpful assistant.',
      messages,
    }).toDataStreamResponse();
  }
}
