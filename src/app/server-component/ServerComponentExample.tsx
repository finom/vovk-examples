import { BasicController } from 'vovk-client';

export default async function ServerComponentExample() {
  /*
  You can pass "prefix" option directly if you don't want to change configuration file.
  const serverResponse = await BasicController.getHello({ 
    prefix: 'http://localhost:3000/api' 
  });
  */
  const serverResponse = await BasicController.getHello();

  return <div>{serverResponse.greeting}</div>;
}
