const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('원하는 도형을 입력하세요 : ', input => {
  console.log(input);
  rl.close();
});