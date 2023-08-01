let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let evenNum = [];

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    evenNum.push(value)
  }
}

evenNum.forEach(num => console.log(num));

// console.log(evenNum);
// let even = myArray.filter(num => {
//   if (num % 2 === 0) {
//     return num; 
//   }
// })

// console.log(even);