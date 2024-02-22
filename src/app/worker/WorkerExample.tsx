'use client';
import { useEffect, useState } from 'react';
import { WorkerService } from 'vovk-client';

export default function WorkerExample() {
  const [value, setValue] = useState(
    navigator.userAgentData?.mobile ? '333944026345847228099687' : '337751842839865299034216387'
  );
  const [result, setResult] = useState<bigint[]>();
  const [isCalculating, setIsCalculating] = useState(false);
  const regExp = /^-?\d+$/;

  useEffect(() => {
    WorkerService.use(new Worker(new URL('../../modules/worker/WorkerService.ts', import.meta.url)));
  }, []);

  const submit = async () => {
    if (!regExp.test(value)) return;
    setIsCalculating(true);
    setResult(await WorkerService.factorize(BigInt(value)));
    setIsCalculating(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
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
