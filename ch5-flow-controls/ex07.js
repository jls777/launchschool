function textCap(text) {
  if (text.length > 10) {
    console.log(text.toUpperCase());
  } else {
    console.log(text);
  }
}

textCap('testing');
textCap('test test test');