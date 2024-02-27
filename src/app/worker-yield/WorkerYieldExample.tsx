'use client';
import { useCallback, useEffect, useState } from 'react';
import { WorkerYieldService } from 'vovk-client';

export default function WorkerYieldExample() {
  const [pi, setPi] = useState(314n);

  const approximatePi = useCallback(async () => {
    // use smaller number for mobile devices
    const yieldEvery = 'ontouchstart' in document.documentElement ? 100 : 1000;
    for await (const pi of WorkerYieldService.approximatePi(1000_000n, yieldEvery)) {
      setPi(pi);
    }
  }, []);

  useEffect(() => {
    WorkerYieldService.use(new Worker(new URL('../../modules/worker-yield/WorkerYieldService.ts', import.meta.url)));

    approximatePi();
  }, [approximatePi]);

  return <div className="break-all max-h-96 overflow-auto">π = {pi.toString().replace(/^(\d)/, '$1.')}</div>;
}
