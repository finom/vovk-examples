'use client';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');

  const { messages, sendMessage, error, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/ai-sdk/function-calling',
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === 'assistant' ? '🤖' : '👤'}{' '}
          {message.parts.map((part, partIndex) => (
            <span key={partIndex}>{part.type === 'text' ? part.text : '...'}</span>
          ))}
        </div>
      ))}
      {error && <div>❌ {error.message}</div>}
      <div className="input-group">
        <input type="text" placeholder="Send a message..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Send</button>
      </div>
    </form>
  );
}
