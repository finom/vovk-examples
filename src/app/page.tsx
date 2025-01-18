import CodeBox from '@/components/CodeBox';
import { metadata as basicMetadata } from './basic/page';
import { metadata as withServiceMetadata } from './basic-with-service/page';
import { metadata as zodMetadata } from './zod/page';
import { metadata as yupMetadata } from './yup/page';
import { metadata as dtoMetadata } from './dto/page';
import { metadata as hookFormMetadata } from './zod-hook-form/page';
import { metadata as openaiMetadata } from './openai/page';
import { metadata as sdkMetadata } from './ai-sdk/page';
import { metadata as serverComponentMetadata } from './server-component/page';
import { metadata as streamMetadata } from './stream/page';
import { metadata as streamResponseObjectMetadata } from './stream-response-object/page';
import { metadata as workerMetadata } from './worker/page';
import { metadata as proxyMetadata } from './proxy/page';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

// const shrikhand = Shrikhand({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
        <CodeBox title={zodMetadata.title} href="/zod">{`
        setResponse(
          await ZodRPC.createUser({
            body: { name, email },
          })
        );
    `}</CodeBox>
        <CodeBox title={hookFormMetadata.title} href="/zod-hook-form">{`
        const {
          register,
          handleSubmit,
        } = useForm<VovkBody</* ... */>({
          resolver: zodResolver(userSchema),
        });
    `}</CodeBox>
        <CodeBox title={yupMetadata.title} href="/yup">{`
        setResponse(
          await YupRPC.createUser({
            body: { name, email },
          })
        );
    `}</CodeBox>
        <CodeBox title={dtoMetadata.title} href="/dto">{`
        setResponse(
          await DtoRPC.createUser({
            body: { name, email },
          })
        );
    `}</CodeBox>

        <CodeBox title={serverComponentMetadata.title} href="/server-component">{`        
        export default async function ServerComponentExample() {
          const serverResponse = await BasicRPC.getHello();
          return <div>{serverResponse.greeting}</div>;
        }     
    `}</CodeBox>
        <CodeBox title={streamMetadata.title} href="/stream">{`
        using stream = await StreamController.streamTokens();

        for await (const token of stream) {
          setTokens((tokens) => [...tokens, token]);
        }
    `}</CodeBox>

        <CodeBox title={streamResponseObjectMetadata.title} href="/stream-response-object">{`
        @get('tokens')
        static async streamTokens() {
          const response = new StreamResponse<Token>();
          void this.streamService.streamTokens(response);
          return response;
        }
    `}</CodeBox>
        <CodeBox title={openaiMetadata.title} href="/openai">{`
    yield* await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      stream: true,
    });
`}</CodeBox>
        <CodeBox title={sdkMetadata.title} href="/ai-sdk">{`
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toDataStreamResponse();
`}</CodeBox>

        <CodeBox title={proxyMetadata.title} href="/proxy">{`    
    @prefix('proxy')
    export default class ProxyController {
      @get('greeting')
      static getHello() {
        return fetch('https://vovk.dev/api/hello/greeting.json') as unknown as { greeting: 'Hello world!' };
      }
    }
`}</CodeBox>
        <CodeBox title={workerMetadata.title} href="/worker">{`
        HelloWorker.employ(/* ... */);
      
        await HelloWorker.factorize(BigInt(value)));
    `}</CodeBox>
      </div>
      <h2 className="text-3xl font-bold text-center py-3 mt-8">Other Examples</h2>
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-3 items-start">
        <div>
          <h3 className="font-bold text-lg text-center mt-4 mb-2">React Native Example</h3>
          <div className="overflow-hidden border border-solid border-gray-900/10 dark:border-gray-100/10 rounded-lg">
            <CodeBlock className="text-sm">{`
          import { GreetingController } from 'vovk-client';

          // ...
          <Pressable 
              onPress={async () => {
                  setGreetingResponse(
                      await GreetingController.getGreeting()
                  );
              }}
          >
              <Text>Get Greeting</Text>
          </Pressable>
          `}</CodeBlock>
          </div>
          <p className="mt-4">
            Next.js + Vovk.ts can be used as a back-end for React Native applications. For details see{' '}
            <Link className="text-nowrap" href="https://github.com/finom/vovk-react-native-example" target="_blank">
              vovk-react-native-example
            </Link>{' '}
            repository.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-center mt-4 mb-2">Bundle the Client</h3>
          <div className="overflow-hidden border border-solid border-gray-900/10 dark:border-gray-100/10 rounded-lg">
            <CodeBlock className="text-sm">{`
          // webpack.config.js          
          module.exports = {
            entry: {
              index: './index.ts',
            },
            devtool: 'inline-source-map',
            // ...
          };
          `}</CodeBlock>
          </div>
          <p className="mt-4">
            The client REST API library bundle can be compiled into a single package and distributed thru NPM, CDN or
            any other way. The examples on this page are bundled with Webpack and served from NPM as{' '}
            <Link className="text-nowrap" href="https://npmjs.com/package/vovk-examples" target="_blank">
              vovk-examples
            </Link>{' '}
            package that&apos;s, in its turn is used by examples on{' '}
            <Link className="text-nowrap" href="https://vovk.dev" target="_blank">
              vovk.dev
            </Link>{' '}
            website to render live demos.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-center mt-4 mb-2">Static JSON API</h3>
          <div className="overflow-hidden border border-solid border-gray-900/10 dark:border-gray-100/10 rounded-lg">
            <CodeBlock className="text-sm">{`
          import { initVovk, generateStaticAPI } from 'vovk';
          
          // ...
          
          export function generateStaticParams() {
            return generateStaticAPI(controllers);
          }
          
          export const { GET } = initVovk({ controllers, workers });
          
          `}</CodeBlock>
          </div>
          <p className="mt-4">
            Thanks to <code>generateStaticParams</code> Next.js feature it&apos;s possible to generate static API that
            is compiled at build time and served from a static hosting. This approach is used at one of the examples on{' '}
            <Link className="text-nowrap" href="https://vovk.dev" target="_blank">
              vovk.dev
            </Link>{' '}
            that is hosted on Github Pages.
          </p>
        </div>
      </div>
    </main>
  );
}
