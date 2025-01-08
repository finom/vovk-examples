import { HttpException, HttpStatus, post, prefix, type VovkRequest } from 'vovk';
import { streamText, type CoreMessage } from 'ai';
import { openai } from '@ai-sdk/openai';

@prefix('ai-sdk')
export default class AiSdkController {
  @post('chat', { cors: true })
  static async chat(req: VovkRequest<{ messages: CoreMessage[] }>) {
    const { messages } = await req.json();
    const LIMIT = 5;

    if (messages.filter(({ role }) => role === 'user').length > LIMIT) {
      throw new HttpException(HttpStatus.BAD_REQUEST, `You can only send ${LIMIT} messages at a time`);
    }

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toDataStreamResponse();
  }
}
