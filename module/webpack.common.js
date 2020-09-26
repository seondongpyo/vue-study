// __dirname, path module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

// ※ Windows 운영체제에서 NODE_ENV를 script 앞에 사용하려면 cross-env 모듈을 설치하자
const isProduction = process.env.NODE_ENV === 'PRODUCTION';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',   // hash contenthash chunkhash
    path: path.resolve(__dirname, 'dist'),
  },
//   target: 'node'
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
        //   {
        //     loader: 'style-loader',
        //     options: {
        //       injectType: 'singletonStyleTag'
        //     }
        //   },
          {
            loader: MiniCssExtractPlugin.loader
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
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'    // css 파일 이름에 해쉬값 적용
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack', // title 값을 문서에 전달
      meta: {   // meta 정보를 문서에 전달
        viewport: 'width=device-width, initial-scale=1.0'
      },
      minify: isProduction ? { // minification 최적화 설정
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        useShortDoctype: true
      } : false,
      template: './template.hbs'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      IS_PRODUCTION: true
    })
  ]
}