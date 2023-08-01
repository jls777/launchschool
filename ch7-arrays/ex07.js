let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((acc, num) => acc + num * num, 0);
}

console.log(sumOfSquares(array));

