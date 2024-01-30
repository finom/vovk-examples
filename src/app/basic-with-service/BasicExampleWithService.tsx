'use client';
import { useState } from 'react';
import { BasicControllerWithService } from '@vovkts/client';
import type { VovkClientReturnType } from 'vovk';

export default function BasicExampleWithService() {
  const [serverResponse, setServerResponse] = useState<VovkClientReturnType<typeof BasicControllerWithService.getHello>>();

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
