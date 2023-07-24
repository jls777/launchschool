//Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// The code will print:

// Hello
// undefined

// The qux variable inside foo gets initialized to undefined when we fail to 
// provide an explicit argument in the invocation.