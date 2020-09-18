// __dirname, path module
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
//   target: 'node'
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.hbs$/i,
        use: ['handlebars-loader']  // options를 지정하지 않는 간단한 형태
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack', // title 값을 문서에 전달
      meta: {   // meta 정보를 문서에 전달
        viewport: 'width=device-width, initial-scale=1.0'
      },
      template: './template.hbs'
    })
  ],
  mode: 'none'
}