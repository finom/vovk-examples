'use client';
import { useState, type FormEvent } from 'react';
import { ZodRPC } from 'vovk-client';
import type { VovkReturnType } from 'vovk';
import validateOnClient from 'vovk-zod/validateOnClient';

export default function ZodFormExample() {
  const [response, setResponse] = useState<VovkReturnType<typeof ZodRPC.createUser> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disableClientValidation, setDisableClientValidation] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setResponse(
        await ZodRPC.createUser({
          body: { name, email },
          disableClientValidation,
          // vovk.config doesn't include preferred validation library,
          // so we need to pass it manually for this example.
          // This is not needed in a real project.
          validateOnClient,
        })
      );
      setError(null);
    } catch (e) {
      setError(e as Error);
      setResponse(null);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className="block mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={disableClientValidation}
          onChange={(e) => setDisableClientValidation(e.target.checked)}
        />
        Disable client-side validation
      </label>
      <button>Submit</button>

      {response && (
        <div className="text-left">
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && <div className="overflow-auto">❌ {String(error)}</div>}
    </form>
  );
}
