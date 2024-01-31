'use client';
import { useState } from 'react';
import { StreamResponseObjectController } from '@vovkts/client';
import type { VovkClientYieldType } from 'vovk';

export default function StreamExample() {
  const [tokens, setTokens] = useState<VovkClientYieldType<typeof StreamResponseObjectController.streamTokens>[]>([]);

  return (
    <>
      <button
        onClick={async () => {
          setTokens([]);
          using stream = await StreamResponseObjectController.streamTokens();
          for await (const token of stream) {
            setTokens((tokens) => [...tokens, token]);
          }
        }}
      >
        Get Streamed Greeting from Server
      </button>
      <div>
        {tokens.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    </>
  );
}
