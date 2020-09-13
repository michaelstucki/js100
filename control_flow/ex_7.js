function toCaps(text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(toCaps('hello world'));
console.log(toCaps('goodbye'));

