import { BasicRPC } from 'vovk-client';

export default async function ServerComponentExample() {
  /*
  You can pass "origin" option directly if you don't want to change configuration file.
  const serverResponse = await BasicController.getHello({ 
    origin: 'http://localhost:3000/api',
  });
  */
  const serverResponse = await BasicRPC.getHello();

  return <div>{serverResponse.greeting}</div>;
}
