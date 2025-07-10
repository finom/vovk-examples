'use client';
import { useEffect, useState } from 'react';
import { PollRPC } from 'vovk-client';

export default function PollExample() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    void (async () => {
      let i = 0;
      while (true) {
        using iterable = await PollRPC.streamPollResponse({
          query: { i: i.toString() },
        });

        for await (const iteration of iterable) {
          ({ i } = iteration);
          setTick(i);
        }

        i++;
      }
    })();
  }, []);

  return (
    <div>
      <h1>Poll ticker</h1>

      <h2>{tick}</h2>
    </div>
  );
}
