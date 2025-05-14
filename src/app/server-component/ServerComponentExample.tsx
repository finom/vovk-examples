import { HelloWorldRPC } from 'vovk-client';

export default async function ServerComponentExample() {
  /*
  You can pass "apiRoot" option directly if you don't want to change configuration file.
  const serverResponse = await BasicController.getHello({ 
    apiRoot: 'http://localhost:3000/api',
  });
  */
  const serverResponse = await HelloWorldRPC.getHello();

  return <div>{serverResponse.greeting}</div>;
}
