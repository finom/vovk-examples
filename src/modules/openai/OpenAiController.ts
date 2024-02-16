import { type VovkRequest, post, prefix, HttpException, HttpStatus } from 'vovk';
import OpenAI from 'openai';

@prefix('openai')
export default class OpenAiController {
  private static openai = new OpenAI();

  @post('chat', { cors: true })
  static async *createChatCompletion(
    req: VovkRequest<{ messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] }>
  ) {
    const { messages } = await req.json();
    const LIMIT = 5;

    if (messages.filter(({ role }) => role === 'user').length > LIMIT) {
      throw new HttpException(HttpStatus.BAD_REQUEST, `You can only send ${LIMIT} messages at a time`);
    }

    yield* await this.openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      stream: true,
    });
  }
}
