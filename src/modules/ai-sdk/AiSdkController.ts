import { createLLMTools, HttpException, HttpStatus, KnownAny, post, prefix, type VovkRequest } from 'vovk';
import { openapi } from 'vovk-openapi';
import { jsonSchema, streamText, tool, type CoreMessage } from 'ai';
import { openai } from '@ai-sdk/openai';
import { ZodRPC, DtoRPC } from 'vovk-client';

@prefix('ai-sdk')
export default class AiSdkController {
  @openapi({
    summary: 'Vercel AI SDK',
    description:
      'Uses [@ai-sdk/openai](https://www.npmjs.com/package/@ai-sdk/openai) and ai packages to chat with an AI model',
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

  @openapi({
    summary: 'Function Calling',
    description:
      'Uses [@ai-sdk/openai](https://www.npmjs.com/package/@ai-sdk/openai) and ai packages to call a function',
  })
  @post('function-calling')
  static async functionCalling(req: VovkRequest<{ messages: CoreMessage[] }>) {
    const { messages } = await req.json();
    const LIMIT = 5;
    const { functions } = createLLMTools({
      modules: { ZodRPC, DtoRPC },
      onSuccess: (d) => console.log('Success', d),
      onError: (e) => console.error('Error', e),
    });

    if (messages.filter(({ role }) => role === 'user').length > LIMIT) {
      throw new HttpException(HttpStatus.BAD_REQUEST, `You can only send ${LIMIT} messages at a time`);
    }

    const tools = Object.fromEntries(
      functions.map(({ name, execute, description, parameters }) => [
        name,
        tool<KnownAny, KnownAny>({
          execute: async (args, { toolCallId }) => {
            return execute(args, { toolCallId });
          },
          description,
          parameters: jsonSchema(parameters as KnownAny),
        }),
      ])
    );

    return streamText({
      model: openai('gpt-4.1'),
      toolCallStreaming: true,
      system:
        'You are a helpful assistant. Always provide a clear confirmation message after executing any function. Explain what was done and what the results were after the user request is executed.',
      messages,
      tools,
      onError: (e) => console.error('streamText error', e),
      onFinish: ({ finishReason, ...x }) => {
        if (finishReason === 'tool-calls') {
          console.log('Tool calls finished');
        }
      },
    }).toDataStreamResponse();
  }
}
