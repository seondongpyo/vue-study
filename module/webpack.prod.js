const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

const config = {
  plugins: [
    new OptimizeCssAssetsPlugin({   // css 최적화 설정
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
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
  mode: 'production'
};

module.exports = merge(common, config);