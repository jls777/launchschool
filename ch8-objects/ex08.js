let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


function copyObj(source, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(key => destinationObject[key] = source[key]);
    return destinationObject;
  } else {
    return Object.assign(destinationObject, source);
  }
  
} 

