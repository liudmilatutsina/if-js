//#1
let user = 'John Doe';

console.log(user);

const student = 'Liudmila Tutsina';

console.log(student);

user = student; //user = student = Liudmila Tutsina

console.log(user);

//#2
let test = 1;
test++; //test = 2

console.log(test);

test--; //test = 1

console.log(test);

test = Boolean(test); //test = true, as 1 - true, 0 - false

console.log(test);

//#3
const array = [2, 3, 5, 8];
let mult = 1;

for (let i = 0; i < array.length; i++) {
  mult *= array[i];
}

console.log(mult);

//#4-5
const array1 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 5 && array1[i] < 10) {
    console.log('> 5 && < 10: ' + array1[i]);
  }
  if (array1[i] % 2 === 0 && array1[i] !== 0) {
    console.log('even: ' + array1[i]);
  }
}
