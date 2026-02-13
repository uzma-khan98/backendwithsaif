//! Functions
//? Parameterised Functions
//? use of return in functions
//? rerurn statement in a function/
// ? How to use a function in a variable?
// ? arrow functions
// ? call-back function

//? Function

//? Parameterised Functions
// function addTwoNumbers(num1,num2) {
//   console.log(num1+num2)
// };
// addTwoNumbers(20, 30);

//? use of return in functions
//? return statement in a function/
// * Example
// function addTwoNumbers(baseSalary, stockIncome) {
//   // console.log(baseSalary + stockIncome);
//   return (baseSalary + stockIncome);
// }
// let result = addTwoNumbers();
// console.log(result);

// let totalSalary = result + 100;
// console.log(totalSalary);

// ? How to use a function in a variable?
// let result=function (num1, num2) {
//   return(num1 + num2)
// };
// let ans = result(20, 30);
// console.log(ans);

// ? arrow function
// let res = (num1, num2) => {
//   return (num1 + num2)
// };
// let answer = result(20, 30);
// console.log(ans);

// ? call-back function
// function validateAge(age) {
//   if (age >= 18) {
//     console.log("You can drive!")
//   } else {
//     console.log("You can't drive!")
//   }
// };
function printMyData(name,myFunc) {
  console.log("My name is ", name);
  myFunc(19);
}
// printMyData("Uzma", validateAge);

// ? call-back with arrow function
 printMyData("Rubab", (age) => {
 
  return age >= 18 ? console.log("You can drive!") : console.log("You can't drive!")

});

// console.log(myEnq);