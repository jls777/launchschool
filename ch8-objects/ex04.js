let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let key = Object.keys(obj);

let upperKeys = key.map(k => k.toUpperCase());

console.log(upperKeys);

