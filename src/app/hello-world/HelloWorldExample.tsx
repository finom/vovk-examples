'use client';
import { useState } from 'react';
import { HelloWorldRPC } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function HelloWorldExample() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof HelloWorldRPC.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          setServerResponse(await HelloWorldRPC.getHello());
        }}
      >
        Get a greeting from the server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
