import CodeBox from '@/components/CodeBox';
import { metadata as basicMetadata } from './basic/page';
import { metadata as withServiceMetadata } from './basic-with-service/page';
import { metadata as formMetadata } from './form/page';
import { metadata as hookFormMetadata } from './hook-form/page';
import { metadata as openaiMetadata } from './openai/page';
import { metadata as serverComponentMetadata } from './server-component/page';
import { metadata as streamMetadata } from './stream/page';
import { metadata as streamResponseObjectMetadata } from './stream-response-object/page';
import { metadata as workerMetadata } from './worker/page';
import { metadata as workerYieldMetadata } from './worker-yield/page';

export default function Home() {
  return (
    <main>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
      <h1 className="text-4xl font-bold text-center py-3">Vovk.ts Interactive Examples</h1>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <CodeBox title={basicMetadata.title} href="/basic">{`
        export default class BasicController {
          @get('greeting')
          static getHello() {
            return { greeting: 'Hello world!' };
          }
        }
    `}</CodeBox>
        <CodeBox title={withServiceMetadata.title} href="/basic-with-service">{`
        export default class BasicService {
          static getHello() {
            return { greeting: 'Hello world!' };
          }
        }      
    `}</CodeBox>
        <CodeBox title={formMetadata.title} href="/form">{`
        setResponse(
          await FormController.createUser({
            body: { firstName, lastName, email },
          })
        );
    `}</CodeBox>
        <CodeBox title={hookFormMetadata.title} href="/hook-form">{`
        const {
          register,
          handleSubmit,
        } = useForm<VovkClientBody</* ... */>({
          resolver: zodResolver(userSchema),
        });
    `}</CodeBox>
        <CodeBox title={openaiMetadata.title} href="/openai">{`
        yield* await openai.chat.completions.create({
          messages,
          model: 'gpt-3.5-turbo',
          stream: true,
        });
    `}</CodeBox>
        <CodeBox title={serverComponentMetadata.title} href="/server-component">{`
        export default async function ServerComponent() {
          const response = await Controller.getHello();
        
          return <div>{response.greeting}</div>;
        }        
    `}</CodeBox>
        <CodeBox title={streamMetadata.title} href="/stream">{`
        using stream = await StreamController.streamTokens();

        for await (const token of stream) {
          setTokens((tokens) => [...tokens, token]);
        }
    `}</CodeBox>
        <CodeBox title={streamResponseObjectMetadata.title} href="/stream-response-object">{`
        @get('tokens', { cors: true })
        static async streamTokens() {
          const response = new StreamResponse<Token>();
          void this.streamService.streamTokens(response);
          return response;
        }
    `}</CodeBox>
        <CodeBox title={workerMetadata.title} href="/worker">{`
        WorkerService.use(/* ... */);
      
        await WorkerService.factorize(BigInt(value)));
    `}</CodeBox>
        <CodeBox title={workerYieldMetadata.title} href="/worker-yield">{`
        for await (
          const pi of WorkerService.approximatePi(/* ... */)
        ) {
          setPi(pi);
        }
    `}</CodeBox>
      </div>
    </main>
  );
}
