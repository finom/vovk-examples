'use client';
import { useState } from 'react';
import { BasicRPCWithService } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function BasicExampleWithService() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof BasicRPCWithService.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          const response = await BasicRPCWithService.getHello();
          setServerResponse(response);
        }}
      >
        Get a Greeting from the Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
