'use client';
import { useState } from 'react';
import { BasicControllerWithService } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function BasicExampleWithService() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof BasicControllerWithService.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          const response = await BasicControllerWithService.getHello();
          setServerResponse(response);
        }}
      >
        Get Greeting from Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
