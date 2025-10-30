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

        for await ({ i } of iterable) {
          setTick(i);
        }

        i++; // incremented to be sent on the next "while" loop iteration
      }
    })();
  }, []);

  return (
    <div>
      <p>Poll ticker</p>
      <h2>{tick}</h2>
    </div>
  );
}
