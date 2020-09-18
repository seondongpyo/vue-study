const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { getCircleArea, getSquareArea } = require('../mathUtil');
const { logFigureError, logInput, logResult } = require('../log');

rl.question(
  '넓이를 구하고자 하는 도형을 입력해주세요. (정사각형, 원) : ', figure => {
    console.log(`선택된 도형 : ${figure}`);

    switch (figure) {
      case '정사각형':
        rl.question('한 변의 길이를 입력하세요 : ', input => {
          console.log(logInput(input));
          console.log(logResult(figure, getSquareArea(input)));
          rl.close();
        });
        break;

      case '원':
        rl.question('반지름의 길이를 입력하세요 : ', input => {
          console.log(logInput(input));
          console.log(logResult(figure, getCircleArea(input)));
          rl.close();
        });
        break;

      default:
        console.log(logFigureError(figure));
        rl.close();
    }
  }
);