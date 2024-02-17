const path = require('path');

module.exports = {
  entry: {
    index: './index.ts',
    WorkerService: './src/modules/worker/WorkerService.ts',
    WorkerYieldService: './src/modules/worker-yield/WorkerYieldService.ts',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      /* {
        test: /WorkerService\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.webpack.json',
              transpileOnly: true, // Speeds up compilation without type checking
            },
          },
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        resourceQuery: /inline/,
        type: 'asset/inline',
      }, */
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
    publicPath: '',
  },
};
