// ! map, filter, find and sort
// ? these methods work for arrays
let students = ["Ali","Kehkashan", "Amna", "Ehsan", "Ayesha", "Pari"];

//? .map()
// students.map((item,index,array) => {
//   console.log(item,index,array)
// });

// ? .filter()
// * filter returns a new array, based on the condition
// let filterNames = students.filter((item) => {
//   return item.length > 5
// });
// console.log(filterNames);

// ? .find()
// * .find() method returns the first element in an array that satisfies the condition.

let filterNames = students.find((item) => {
  return item.length > 5
});
console.log(filterNames);

// * example-2
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);
console.log(found); // 12 (first element greater than 10)


// ! Loops
// * initialiization
// * condition check
// * body of loop
// * increment / decrement