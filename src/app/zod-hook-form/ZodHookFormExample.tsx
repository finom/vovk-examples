'use client';
import { useState } from 'react';
import { ZodRPC } from 'vovk-client';
import { useForm } from 'react-hook-form';
import type { VovkBody, VovkReturnType } from 'vovk';
import { ajvResolver } from '@hookform/resolvers/ajv';
import { fastFormats } from 'ajv-formats/dist/formats';

export default function ZodHookFormExample() {
  const [response, setResponse] = useState<VovkReturnType<typeof ZodRPC.updateUser> | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<VovkBody<typeof ZodRPC.updateUser>>({
    resolver: ajvResolver(ZodRPC.updateUser.schema.validation!.body, {
      formats: fastFormats,
    }),
  });

  const onSubmit = async () => {
    setResponse(
      await ZodRPC.updateUser({
        params: { id: '2' },
        body: getValues(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('name')} />
      {errors.name && <p>❌ {errors.name.message}</p>}
      <input type="text" placeholder="Email" {...register('email')} />
      {errors.email && <p>❌ {errors.email.message}</p>}
      <button>Submit</button>

      {response && (
        <div>
          <h3>Response</h3>
          <pre className="text-left">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}
