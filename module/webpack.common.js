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
    /*
     * filename.module.scss => css modules 적용
     * filename.scss => global
     */
    rules: [
      {
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      {
        test: /\.hbs$/i,
        use: ['handlebars-loader']  // options를 지정하지 않는 간단한 형태
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // i : 대소문자를 구분하지 않겠다
        use: [{
          loader: 'file-loader',
          options: {
            // name: '[contenthash].[ext]',  // 빌드 시 이미지 파일 이름 설정 기본값
            name () {
              if (!isProduction) {
                return '[path][name].[ext]';  // 개발 모드일 시, 원래 파일 이름 표시
              }

              return '[contenthash].[ext]'; // 운영 모드일 시, 해쉬값이 적용된 파일 이름 표시
            },
            publicPath: 'assets/', // 파일을 참조하는 url 정보에 'assets/' 경로 추가
            outputPath: 'assets/' // 빌드 시 이미지 파일이 생성되는 경로를 'dist/assets/' 로 설정
          }
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192 // 파일의 바이트 크기 제한
          }
        }]
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
      IS_PRODUCTION: isProduction
    })
  ]
}