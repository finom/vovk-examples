import OpenAI from 'openai';
import { get, prefix } from 'vovk';

@prefix('frozen-stream')
export default class FrozenStreamController {
  @get('llm.jsonl')
  static async *getFrozenStream() {
    const openai = new OpenAI();

    yield* await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: 'Write a short story in 10 sentences about two brosers: REST and RPC',
        },
      ],
      model: 'gpt-4o-mini',
      stream: true,
    });
  }
}
