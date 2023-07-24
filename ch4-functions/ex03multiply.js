function multiply(num1, num2) {
  return num1 * num2;
}

function getnum(prompt) {
  let rlsync = require('readline-sync');
  // let num = rlsync.question(prompt);
  // return num = parseInt(num);
  return parseInt(rlsync.question(prompt));
}

let num1 = getnum('enter first number ');
let num2 = getnum('enter second number ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
