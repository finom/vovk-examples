import { type VovkRequest, post, prefix, HttpException, HttpStatus } from 'vovk';
import OpenAI from 'openai';

@prefix('openai')
export default class OpenAiController {
  private static _openai: OpenAI;

  private static get openai() {
    // to avoid compilation errors if OPENAI_API_KEY is not set
    return (this._openai ??= new OpenAI());
  }

  @post('chat', { cors: true, headers: { 'Access-Control-Allow-Origin': 'https://vovk.dev' } })
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
      model: 'gpt-4o-mini',
      stream: true,
    });
  }
}
