// In the following code, what are the final length values for array1, array2,
//  array3, array4, and array5?

let array1 = [1, 2, undefined, 4];
console.log(array1, array1.length);
let array2 = [1];
array2.length = 5;
console.log(array2, array2.length);
let array3 = [];
array3[-1] = [1];
console.log(array3, array3.length);
let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4, array4.length);
let array5 = [];
array5[100] = 3;
console.log(array5, array5.length);
// The length of array1 is 4. The length is the highest index position that has
//  a value, plus 1. In this case, the highest index position that has a value 
//  is 3; add 1 to that, and we get the length value of 4.

// The length of array2 is 5. You can set the length of an array. Even if the 
// highest index position that has a value assigned is 0, assigning a new 
// length of 5 overrides that length. For now, you can think of the resulting 
// array as having 5 elements of which the last 4 have a value of undefined. 
// In actuality, the array still has only one element, but has 4 gaps at the 
// end -- the gaps aren't real elements and take up very little memory. 
// We'll learn more about this in the Core Curriculum.

// The length of array3 is 0. Index positions must be non-negative integers 
// starting from 0. Negative and non-integer indexes don't get taken into 
// account when determining an array's length.

// The length of array4 is 3. Contrast this with array2. When you set an array 
// to a length that is shorter than its current length, the array gets truncated 
// to the new length. In this example, JavaScript truncates the array by 
// removing the last two elements, leaving a total of 3 elements.

// The length of array5 is 101. As already noted, the length is the highest index
//  position that has a value, plus 1. In this case, the highest index position 
//  that has a value is 100, so the length is 101.