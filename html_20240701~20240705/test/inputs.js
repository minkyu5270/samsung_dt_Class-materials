const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 콜백함수-> 그 전 작업이 끝나면 실행해라
rl.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});