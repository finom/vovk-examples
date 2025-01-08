'use client';
import { useChat } from 'ai/react';

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, isLoading, error } = useChat({
    api: '/api/ai-sdk/chat',
  });

  return (
    <form onSubmit={handleSubmit}>
      {messages.map((message, index) => (
        <div key={index}>
          {message.role === 'assistant' ? '🤖' : '👤'} {(message.content as string) || '...'}
        </div>
      ))}
      {error && <div>❌ {error.message}</div>}
      <div className="input-group">
        <input type="text" placeholder="Send a message..." value={input} onChange={handleInputChange} />
        <button disabled={isLoading}>Send</button>
      </div>
    </form>
  );
}
