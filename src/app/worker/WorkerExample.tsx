'use client';
import { type FormEvent, useEffect, useState } from 'react';
import { HelloWorker } from 'vovk-client';

export default function WorkerExample() {
  const isMobile = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;
  const [value, setValue] = useState(
    // use smaller number on mobile devices
    isMobile ? '333944026345847228099687' : '337751842839865299034216387'
  );
  const [result, setResult] = useState<bigint[]>();
  const [isCalculating, setIsCalculating] = useState(false);
  const regExp = /^-?\d+$/;

  useEffect(() => {
    HelloWorker.employ(new Worker(new URL('../../modules/worker/HelloWorker.ts', import.meta.url)));
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!regExp.test(value)) return;
    setIsCalculating(true);
    setResult(await HelloWorker.factorize(BigInt(value)));
    setIsCalculating(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Type a large number..."
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button disabled={!regExp.test(value) || isCalculating}>
          {isCalculating ? 'Calculating...' : 'Factorize'}
        </button>
      </div>
      <div className="break-all max-h-96 overflow-auto">
        {result?.map((factor, index) => <div key={index}>{factor.toString()}</div>)}
      </div>
    </form>
  );
}
