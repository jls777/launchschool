// Which of the following values are primitive values? Which are objects? 
// Which are neither?

"foo"
3.1415
[ 'a', 'b', 'c' ]
false
foo
function bar() { return "bar"; }
undefined
//{ a: 1, b: 2 }

// Primitive Values

"foo"
3.1415
false
undefined
// Strings, numbers, booleans, and undefined are all primitive values
//  (as are null, bigints, and symbols).

// Objects

[ 'a', 'b', 'c' ] //(arrays are objects)
function bar() { return "bar"; } //(functions are objects)
// { a: 1, b: 2 }

// Neither

// foo is an identifier. Identifiers are used to name things that have values,
//  such as variables and functions, but they are not values by themselves. 
//  Thus, they are neither primitive values nor objects.