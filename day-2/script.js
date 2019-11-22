/* 
  Add 'b's with a for loop
  Reference: https://www.w3schools.com/js/js_loop_for.asp
*/
let x = 'a';

for (let i=0; i < 10; i++) {
  x = x + 'b';
}

console.log(x);


/*
  Playing with JavaScript arrays
*/
let arr = [12, 21, 312];

// access array elements with index
// REMEMBER: array index starts with 0 (zero)
console.log(arr[0]);
console.log(arr[1]);

// Push an element to end of an array
arr.push(42);
console.log(arr);

// replace an array element with a new value
arr[1] = 10;
console.log(arr);

// remove last element from an array and store it in a variable
let popped = arr.pop();
console.log(arr); // array without the last element
console.log(popped); // element removed from the array

/*
  slicing arrays
  Reference: https://www.w3schools.com/jsref/jsref_slice_array.asp
*/
let arr1 = ['a', 'b', 'c', 'c', 'd', 'c'];
// to get ['b', 'c', 'c']
console.log(arr1.slice(1, 4));

// to get index of an element
let loc = [];
let index_of = arr1.indexOf('c'); 
loc.push(index_of);
index_of = arr1.indexOf('c', index_of+1);
loc.push(index_of);
console.log(loc);
console.log(arr1.indexOf('c'));

/*
  Print out elements of an array
*/
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// print out array elements with 'for .. of'  loop
for (let a of arr2) {
  console.log(a);
}

/*
  Print out elements of an array with forEach()
*/
let arr = [1, 2, 3, 4, 5];
arr.forEach(i => console.log(i));


/*
  JavaScript object 
*/
let student = {
  name: "Bappi",
  profession: "Student",
  contact: "02313"
};

// print out object's properties and value (key and value)
for (let x in student) {
  console.log(x,":", student[x]);
}

// access object's property value with key
console.log(student['profession']);

// assign new property with value
student['email'] = 'bappi@email.com';
console.log(student);

// change an existing value
student['contact'] = "123132";
console.log(student);



/******************* 
    Functions
********************/
// a simple function which add 2 numbers given as parameters
function add(a,b) {
  return a + b;
}

// call `add` function and store the return value in variables
let sum1 = add(3,5);
let sum2 = add(11,21);

console.log(sum1);
console.log(sum2);

let sum_final = add(sum1, sum2);
console.log(sum_final);

// arrow function
// More on arrow functions => https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/
const subtraction = (a,b) => {
  return a-b;
}
console.log(subtraction(10,1));

const division = function (a,b) {
  return a / b;
}

console.log(division(12,4));

