# vovk-examples

<a href="https://www.npmjs.com/package/vovk-examples"><img src="https://badge.fury.io/js/vovk-examples.svg" alt="npm version" /></a>

Collection of examples of how you would use [Next.js](https://nextjs.org/) with [Vovk.ts](https://vovk.dev/) in practice. You can see them live on [vovk-examples.vercel.app](https://vovk-examples.vercel.app/). The client-side library generated with Vovk.ts is published as [vovk-examples](https://www.npmjs.com/package/vovk-examples) NPM package as an illustration on how you can distribute API library of your REST endpoints to be used by other developers or for another use-case.

Install:

```sh
npm i vovk-examples
```

Use:

```ts
import { BasicController } from 'vovk-client';

const response = await BasicController.getHello();
```


## Making your own library

### Set up Webpack

You can use any bundler but at this example we're going to use the most common one.

Install [Webpack](https://webpack.js.org/) and [ts-loader](https://www.npmjs.com/package/ts-loader).

```sh
npm i -D ts-loader webpack webpack-cli
```

Create a Webpack config that inits the loader. The `entry` and `output.filename` definitions can vary for your project but this syntax is going to enable Worker interface bundling that's explained below. See [full Webpack config here](./webpack.config.js).

```js
const path = require('path');

module.exports = {
  entry: {
    index: './index.ts',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.webpack.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'commonjs2' },
  },
};

```



### Create a separate tsconfig

Create **tsconfig.webpack.json**, enable decorators, add `outDir` and include required files. See [full tsconfig here](./tailwind.config.ts)

```ts
{
  "compilerOptions": {
   // ...
    "experimentalDecorators": true,
    "outDir": "./dist"
  },
  "include": ["./.vovk/index.ts", "./src/app/api/[[...]]/route.ts"]
}
```

### Create the entry point file

In the root of the project create `index.ts` with the following content:

```ts
// index.ts
export * from './.vovk';
```

As you can see the entry file exports everything as is but if needed you can rename variables or create an abstraction to make your library look nicer to the end user.


```ts
// index.ts
import type { VovkClientBody } from 'vovk';
import { FormController } from './.vovk';

/*
import { form } from 'my-lib';

await form.createUser(...);
*/
export const form = FormController;

// or

/*
import { createUser } from 'my-lib';

await createUser(...);
*/
export function createUser(body: VovkClientBody<typeof FormController.createUser>) {
    return FormController.createUser({ body })
}
```

As you also may notice the entry point file re-exports or imports the library from **.vovk** folder from the root of the repository. In our case the Vovk.ts library is compiled to this folder to avoid limitations trying to bundle files from **node_modules** and keep the configuration as simple as possible. This does nothing to the main application logic you implement and does nothing to the original generated client **node_modules/.vovk**, in other words your app doesn't need to reconfigured in order to create the package. You can add **.vovk** to **.gitignore** file to exclude it from Git index.

```gitignore
# .gitignore
.vovk
```

### Create an NPM script

At the **package.json** create **build-client** NPM script

```js
...
"scripts": {
    ...
    "build-client": "rm -rf .vovk dist && VOVK_PREFIX=https://vovk-examples.vercel.app/api VOVK_OUT=.vovk vovk generate && webpack --mode production"
},
...
```

The script does the following:

- Removes the existing **.vovk** (compiled by Vovk.ts) and **dist** (compiled by Webpacl) folders (you can use [rimraf](https://www.npmjs.com/package/rimraf) to do that on Windows).
- Runs `vovk generate` with `VOVK_PREFIX` variable that indicates the root endpoint of your REST API and `VOVK_OUT` that makes the client to be compiled to **.vovk** in the root of the project.
- `webpack --mode production` compies the bundle.


### Compile and publish

1. Run `npm run build-client`.
1. Bump the [version](https://docs.npmjs.com/cli/v8/commands/npm-version) with `npm version patch` or manually.
1. Run `npm run publish` to publish.

Depending ont he name of your library defined at **package.json** you can now install and import the library in another project.

```sh
npm i my-lib
```

```ts
import { FormController } from 'my-lib';

await FormController.createUser(...);
```


### Compile a Worker

As before, to make the configuration as simple as possible, you can compile your Worker Services separately from the main bundle.


```js
// webpack.config.js
module.exports = {
  entry: {
    index: './index.ts',
    WorkerService: './src/modules/worker/WorkerService.ts',
    WorkerYieldService: './src/modules/worker-yield/WorkerYieldService.ts',
  },
  // ...
```

The package is going to include additional files that are going to be initalised and injected to the worker interface when imported in another project. Check [Web Worker Service documentation](https://docs.vovk.dev/docs/worker) for more info.

```ts
import { WorkerService } from 'my-lib';

// ...
WorkerService.use(new Worker(new URL('my-lib/dist/WorkerService.js', import.meta.url)));

await WorkerService.heavyCalculation();
```