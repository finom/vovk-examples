'use client';
import { useState } from 'react';
import { FormController } from 'vovk-client';
import { useForm } from 'react-hook-form';
import type { VovkClientBody, VovkClientReturnType } from 'vovk';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../../zod';

export default function HookFormExample() {
  const [response, setResponse] = useState<VovkClientReturnType<typeof FormController.createUser> | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<VovkClientBody<typeof FormController.createUser>>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async () => {
    setResponse(
      await FormController.createUser({
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
