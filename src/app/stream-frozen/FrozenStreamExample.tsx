'use client';
import { useEffect, useState } from 'react';
import { FrozenStreamRPC } from 'vovk-client';

export default function FrozenStreamExample() {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    void (async () => {
      using completion = await FrozenStreamRPC.getFrozenStream({
        interpretAs: 'application/jsonl',
      });

      for await (const chunk of completion) {
        await new Promise((resolve) => setTimeout(resolve, 30)); // simulate a delay
        setData((v) => [...v, chunk.choices[0].delta.content ?? '']);
      }
    })();
  }, []);

  return <div>{data.map((content) => content)}</div>;
}
