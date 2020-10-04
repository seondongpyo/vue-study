const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const StylelintPlugin = require('stylelint-webpack-plugin');

const config = {
  mode: 'development',
  devServer: {
    open: true, // 기본 브라우저 기반으로 새 탭이 열리면서 웹 애플리케이션이 실행
    overlay: true,  // 에러 메시지를 브라우저 창에 표시
    historyApiFallback: {
      rewrites: [
        { from: /^\/subpage$/, to: 'subpage.html' },  // routing 처리 => /subpage 경로로 접근 시 subpage.html 페이지로 이동
        { from: /./, to: '404.html' } // ./ : 특정 경로를 제외한 모든 경로 => 404 페이지로 이동
      ]
    },
    port: 3333,  // 개발 서버의 포트 번호 지정
  },
  plugins: [
    new StylelintPlugin()
  ]
};

module.exports = merge(common, config);