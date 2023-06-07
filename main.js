//#1 - variant 1
((str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
})('шалаш');

//#1 - variant 2
((str) => {
  return str.split('').reverse().join() === str;
})('шалаш');

//#2
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

//function min with ternary operator
function min_t(a, b) {
  return a < b ? a : b;
}

//function max with ternary operator
function max_t(a, b) {
  return a > b ? a : b;
}

max(30, 3);
min(30, 3);
max_t(30, 3);
min_t(30, 3);

//#3 - 1 variant

const arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 101);
}

function zero_replacer_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().includes('0')) {
      arr[i] = arr[i].toString().replace(/0/g, 'zero'); // - 1 variant
      //arr[i] = arr[i].split('0').join('zero'); - 2 variant
      //arr[i] = arr[i].replaceAll('0','zero'); - 3 variant
    }
  }
  return arr;
}

console.log(zero_replacer_1(arr));