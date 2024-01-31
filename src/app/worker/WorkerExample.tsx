'use client';
import { useCallback, useEffect, useState } from 'react';
import { WorkerService } from '@vovkts/client';

export default function BasicExample() {
  const [pi, setPi] = useState(3.14);

  const calculatePi = useCallback(async () => {
    for await (const pi of WorkerService.calculatePi(100_000_000_000, 100_000_000)) {
      setPi(pi);
    }
  }, []);

  useEffect(() => {
    WorkerService.use(new Worker(new URL('../../modules/worker/WorkerService.ts', import.meta.url)));

    calculatePi();
  }, [calculatePi]);

  return <div>π = {pi}</div>;
}
