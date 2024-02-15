'use client';
import { useCallback, useEffect, useState } from 'react';
import { WorkerYieldService } from 'vovk-client';

export default function WorkerYieldExample() {
  const [pi, setPi] = useState(3n);

  const approximatePi = useCallback(async () => {
    for await (const pi of WorkerYieldService.approximatePi(1000_000n, 1000)) {
      setPi(pi);
    }
  }, []);

  useEffect(() => {
    WorkerYieldService.use(new Worker(new URL('../../modules/worker-yield/WorkerYieldService.ts', import.meta.url)));

    approximatePi();
  }, [approximatePi]);

  return <div className="break-all max-h-96 overflow-auto">π = {pi.toString().replace(/^(\d)/, '$1.')}</div>;
}
