const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals({
    whitelist: ['database', 'schemas', 'typings']
  })],
  entry: './src/server.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    modules: ['node_modules','src'],
    extensions: ['.js', '.ts'],
    symlinks: true
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'ts-loader',
        }],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader'
      }
    ]
  },
  plugins: [
  ],
}