'use client';
import { useState, type FormEvent } from 'react';
import { FormController } from '@vovkts/client';
import type { VovkClientReturnType } from 'vovk';

export default function FormExample() {
  const [response, setResponse] = useState<VovkClientReturnType<typeof FormController.createUser> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setResponse(
        await FormController.createUser({
          body: { firstName, lastName, email },
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
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>Submit</button>

      {response && (
        <div className="text-left">
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <pre>{String(error)}</pre>
        </div>
      )}
    </form>
  );
}
