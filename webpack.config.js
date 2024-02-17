const path = require('path');

module.exports = {
  entry: './index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      /* {
        test: /WorkerService\.ts$/,
        use: { 
          loader: "worker-loader", 
          options: {
            inline: "fallback",
          }, 
        },
      }, */
      {
        resourceQuery: /inline/,
        type: 'asset/inline',
        generator: {
          emit: false,
        },
      },
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
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'commonjs2' },
    publicPath: '',
  },
};
