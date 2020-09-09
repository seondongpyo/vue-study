const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d => d * d;

// 1) CommonJS 표준 내보내기
// 1-1) module.exports
module.exports = {
  PI,
  getCircleArea,
  getSquareArea
}

// 1-2) exports
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

// 2) ESM 표준 내보내기
// 2-1) export
// export {
//     PI,
//     getCircleArea
// }

// 2-2) export default
// export default {
//     PI,
//     getCircleArea
// }