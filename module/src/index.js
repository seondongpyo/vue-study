/**
 * 1. 원의 넓이를 구하는 공식
 * 2. PI 정의
 * 3. 공식을 통해 결과 얻기
 */

// 1) CommonJS 표준
// const { getCircleArea } = require('./mathUtil');

// 2) ESM 표준
// import { getCircleArea } from './mathUtil';  // export 사용 시
// const result = getCircleArea(2);

// import mathUtil from './mathUtil';  // export default 사용 시 : 객체 이름으로 접근
// const result = mathUtil.getCircleArea(2);
// console.log(result);


import 'normalize.css';
import styles from './index.module.scss';
import $ from 'jquery';
import avatarImg from './assets/avatar.png';
import firefoxImgSvg from './assets/firefox.svg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';

  const imgElement = document.createElement('img');
  // imgElement.src = avatarImg;
  // imgElement.classList = styles.avatarImg;
  imgElement.src = firefoxImgSvg;
  imgElement.classList = styles.firefoxImgSvg;

  console.log(avatarImg);
  console.log(firefoxImgSvg);
  console.log(styles);
  element.appendChild(imgElement);
  element.classList = styles.helloWebpack;

  return element;
}

document.body.appendChild(component());
console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS PRODUCTION MODE : ${IS_PRODUCTION}`);