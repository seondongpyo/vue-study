// __dirname, path module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

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
    new OptimizeCssAssetsPlugin({   // css 최적화 설정
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack', // title 값을 문서에 전달
      meta: {   // meta 정보를 문서에 전달
        viewport: 'width=device-width, initial-scale=1.0'
      },
      minify: { // minification 최적화 설정
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        useShortDoctype: true
      },
      template: './template.hbs'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'venders',
          chunks: 'all'
        }
      }
    },
    minimize: true, // webpack에서 terser 실행 => js 최적화
    minimizer: [new TerserWebpackPlugin({   // compressor 지정 및 옵션 지정 가능
      cache: true   // 빌드 시간 단축
    })]  
  },
  mode: 'none'
}