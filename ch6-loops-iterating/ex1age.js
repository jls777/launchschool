let rlSync = require('readline-sync');
let age = rlSync.question('how old are you ');
age = parseInt(age);
console.log(`you are ${age} years old`);
for (future = 10; future <= 40; future += 10) {
  console.log(`in ${future}, you will be ${future + age} years old`);
}

