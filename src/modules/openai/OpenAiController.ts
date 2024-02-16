import { type VovkRequest, post, prefix } from 'vovk';
import OpenAI from 'openai';

@prefix('openai')
export default class OpenAiController {
  private static openai = new OpenAI();

  @post('chat', { cors: true })
  static async *createChatCompletion(
    req: VovkRequest<{ messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] }>
  ) {
    const { messages } = await req.json();

    yield* await this.openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      stream: true,
    });
  }
}
