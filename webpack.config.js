const path = require('path');

module.exports = {
  entry: './index.ts', // Update this path
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
            loader: 'ts-loader',
            options: {
                configFile: "tsconfig.webpack.json"
            }
        }],
        exclude: /node_modules\/(?!\.vovk)/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
