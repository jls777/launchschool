let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let arrLength = arr.map(elem => elem.length);
let oddLength = arrLength.filter(num => {
  if (num % 2 !== 0) {
    return num;
  }
})

console.log(oddLength);

function odd(array) {
  let arrLength = array.map(elem => elem.length);
  let oddLength = arrLength.filter(num => num % 2 !== 0);
  return oddLength;
}

console.log(odd(arr));