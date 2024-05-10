'use client';
import { useCallback, useEffect, useState } from 'react';
import { HelloWorkerYield } from 'vovk-client';

export default function WorkerYieldExample() {
  const [pi, setPi] = useState(314n);

  const approximatePi = useCallback(async () => {
    for await (const pi of HelloWorkerYield.approximatePi(100_000n, 10_000)) {
      setPi(pi);
    }
  }, []);

  useEffect(() => {
    HelloWorkerYield.employ(new Worker(new URL('../../modules/worker-yield/HelloWorkerYield.ts', import.meta.url)));

    approximatePi();
  }, [approximatePi]);

  return <div className="break-all max-h-96 overflow-auto">π = {pi.toString().replace(/^(\d)/, '$1.')}</div>;
}
