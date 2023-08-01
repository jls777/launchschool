let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(array) {
  return array.reduce((acc, elem) => {
    let ar = elem.length;
    if (ar % 2 !== 0) {
      acc.push(ar);
    }

     return acc;
  }, []);
}

console.log(oddLengths(arr));