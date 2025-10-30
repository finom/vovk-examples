'use client';
import { useState } from 'react';
import { StaticParamsRPC } from 'vovk-client';
import { VovkParams, type VovkReturnType } from 'vovk';

export default function StaticParamsExample() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof StaticParamsRPC.getStaticParams>>();
  const [section, setSection] = useState<VovkParams<typeof StaticParamsRPC.getStaticParams>['section']>('a');
  const [page, setPage] = useState<VovkParams<typeof StaticParamsRPC.getStaticParams>['page']>('1');

  return (
    <>
      <label>Section:</label>
      <select value={section} onChange={(e) => setSection(e.target.value as typeof section)}>
        {['a', 'b'].map((key: string) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <br />
      <label>Page:</label>
      <select value={page} onChange={(e) => setPage(e.target.value as typeof page)}>
        {['1', '2', '3'].map((key: string) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <br />
      <button
        onClick={async () => {
          setServerResponse(await StaticParamsRPC.getStaticParams({ params: { section, page } }));
        }}
      >
        Get Static Params Response
      </button>
      <div>{serverResponse ? JSON.stringify(serverResponse) : ''}</div>
    </>
  );
}
