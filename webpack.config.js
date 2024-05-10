const path = require('path');

module.exports = {
  entry: {
    index: './index.ts',
    HelloWorker: './src/modules/worker/HelloWorker.ts',
    HelloWorkerYield: './src/modules/worker-yield/HelloWorkerYield.ts',
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
