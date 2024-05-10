'use client';
import { useState } from 'react';
import { BasicController } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function BasicExample() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof BasicController.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          setServerResponse(await BasicController.getHello());
        }}
      >
        Get Greeting from Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
