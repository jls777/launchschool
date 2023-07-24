// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// The code will print:

// 42
// 3.1415

// The 3rd argument to foo is ignored since the function definition only 
// mentions two parameters.
