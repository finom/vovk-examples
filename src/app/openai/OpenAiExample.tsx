'use client';
import { useState } from 'react';
import { OpenAiController } from '@vovkts/client';
import type OpenAI from 'openai';

export default function BasicExample() {
  const [messages, setMessages] = useState<OpenAI.Chat.Completions.ChatCompletionMessageParam[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const submit = async () => {
    if(!userInput) return;
    setUserInput('');
    const userMessage: OpenAI.Chat.Completions.ChatCompletionMessageParam = { role: 'user', content: userInput };
    const assistantMessage: OpenAI.Chat.Completions.ChatCompletionMessageParam = { role: 'assistant', content: '' };

    setMessages(messages => [ ...messages, userMessage ]);

    const completion = await OpenAiController.createChatCompletion({
      body: { messages: [ ...messages, userMessage ] },
    });

    setMessages(mesages => [ ...mesages, assistantMessage ]);

    for await (const chunk of completion) {
      const deltaContent = chunk.choices[0]?.delta?.content ?? '';
      setMessages(mesages => [
        ...mesages.slice(0, -1),
        { 
          ...mesages[mesages.length - 1], 
          content: mesages[mesages.length - 1].content + deltaContent 
        },
      ]);
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      submit();
    }}> 
      {messages.map((message, index) => (
        <div key={index}>
          {message.role === 'assistant' ? '🤖' : '👤'}{' '}
          {message.content as string}
        </div>
      ))}
      <div className='input-group'>
        <input 
          placeholder='Type a message...'
          value={userInput} 
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
        <button disabled={!userInput}>Send</button>
      </div>
    </form>
  );
}
