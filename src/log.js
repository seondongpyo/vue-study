const logInput = input => `입력 받은 값 : ${input}`;
const logResult = (figure, result) => `${figure}의 넓이는 ${result} 입니다.`;
const logFigureError = figure => `${figure}은(는) 지원하지 않는 도형입니다. 정사각형 또는 원을 입력해주세요.`;

module.exports = {
  logInput,
  logResult,
  logFigureError
}