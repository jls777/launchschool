// Identify all of the variables, object property names, primitive values, 
// and objects shown in the following code 
// (assume the code has not been executed). Don't panic if you miss a few items
//  - this exercise is more challenging than it looks.

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();