let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evenNum = [];

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let even = myArray[i][j];
    if (even % 2 === 0) {
      evenNum.push(even);
    }
  }
}

console.log(evenNum);

