'use client';
import { useState } from 'react';
import { BasicRPC } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function BasicExample() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof BasicRPC.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          setServerResponse(await BasicRPC.getHello());
        }}
      >
        Get a Greeting from the Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
