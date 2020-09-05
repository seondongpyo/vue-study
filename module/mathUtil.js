const PI = 3.14;
const getCircleArea = r => r * r * PI;

// 1) module.exports
// module.exports = {
//   PI,
//   getCircleArea
// }

// 2) exports
exports.PI = PI;
exports.getCircleArea = getCircleArea;