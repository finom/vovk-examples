'use client';
import { useState, type FormEvent } from 'react';
import { UserDtoRPC } from 'vovk-client';
import type { VovkReturnType } from 'vovk';
import { validateOnClient } from 'vovk-dto/validateOnClient';
import { plainToInstance } from 'class-transformer';
import { UpdateUserBodyDto, UpdateUserParamsDto, UpdateUserQueryDto } from '@/modules/dto/UserDto';

export default function DtoFormExample() {
  const [response, setResponse] = useState<VovkReturnType<typeof UserDtoRPC.updateUser> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(30);
  const [disableClientValidation, setDisableClientValidation] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setResponse(
        await UserDtoRPC.updateUser({
          body: plainToInstance(UpdateUserBodyDto, { name, email, age } satisfies UpdateUserBodyDto),
          query: plainToInstance(UpdateUserQueryDto, { notify: 'push' } satisfies UpdateUserQueryDto),
          params: plainToInstance(UpdateUserParamsDto, { id: '5a279068-35d6-4d67-94e0-c21ef4052eea' } satisfies UpdateUserParamsDto),
          disableClientValidation,
          // vovk.config doesn't include preferred validation library,
          // so we need to pass it manually for this example.
          // This is not needed in a real project when config.imports.validateOnClient is set to 'vovk-dto/validateOnClient'.
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
      <label>Age:</label>
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.valueAsNumber)} />
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
