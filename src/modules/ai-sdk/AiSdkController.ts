import { post, prefix, VovkRequest } from 'vovk';
import { type CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

@prefix('ai-sdk')
export default class AiSdkController {
  @post('chat', { cors: true })
  static async chat(req: VovkRequest<{ messages: CoreMessage[] }>) {
    const { messages } = await req.json();

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toDataStreamResponse();
  }
}
