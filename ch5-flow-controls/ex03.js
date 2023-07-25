function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('please enter a number');
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(7);
evenOrOdd(10);
evenOrOdd('7');
evenOrOdd('two');
