'use client';
import { useState } from 'react';
import { ProxyRPC } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function ProxyExample() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof ProxyRPC.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          setServerResponse(await ProxyRPC.getHello());
        }}
      >
        Get Greeting from Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
