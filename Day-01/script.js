//? Variables in JS

// let a = 123;
// b = a;
// a = 3;
// console.log(a, b);      //!  3  123
// * a can't be redeclared but reassigned

// ? Array in JS
let arr = ["Ali", 3, true, 3.56, "Sadaf"];
// console.log(arr, typeof arr);    //! [ 'Ali', 3, true, 3.56, 'Sadaf' ] object

// let arr2 = arr;
// arr[2] = "Hamza";
// console.log(arr);        //! [ 'Ali', 3, 'Hamza', 3.56, 'Sadaf' ]
// //* replacing true with hamza
// console.log(arr, arr2);   //!same

// arr = ["Ali", "Hamza"];
// console.log(arr, arr2);      //! [ 'Ali', 'Hamza' ] [ 'Ali', 3, 'Hamza', 3.56, 'Sadaf' ]

// arr2[0] = 100;
// console.log(arr, arr2);    //! [ 100, 3, 'Hamza', 3.56, 'Sadaf' ] [ 100, 3, 'Hamza', 3.56, 'Sadaf' ]- both are same -having same memory ref.

// ? Functions
// let a = 12;
// let b = 2;

// console.log(a + b);
// * it can be converted into function
// function add() {
//   let a = 12;
//   let b = 2;
//   console.log(a + b);
// };
// add();
// ! OR with arguments
// function add(a,b) {
//   console.log(a + b);
// };

// add(100, 200);

// ! Adding Three Numbers
// function add(a, b,c) {
//   console.log(a + b+ c);
// };

// add(100, 200, 300);


// * giving default value
// function add(a, b, c=0) {
//   return (a + b + c);
// };
// let sum = add(100, 200,200);
// console.log(sum / 3)

// 1. Write a function that finds the sum of two numbers
// 2. Write another function that displays this result in a pretty format
// 3. Write another function that takes this sum and prints it in passive tense

//? Let’s write some code -
// ?  1. Write the program to greet a person given their first and last name
// let firstName = "Shazia";
// let lastName = "Ahmed";
// function greet() {
//   console.log(`Welcome, ${firstName} ${lastName}`)
// }
// greet();

//? 2. Write a program that greets a person based on their gender. (If else)


// function greet() {
//   if()
//   console.log(`Welcome, ${firstName} ${lastName}`)
// }
// greet();

//? 3. Write a program that counts from 0 - 1000 and prints(for loop)
// for (let i = 0; i <= 1000; i++){
//   console.log(i)
// }



// 3. Write a program that prints all the male people’s first name given a complex object
// 4. Write a program that reverses all the elements of an array

// 1. Write a program prints all the even numbers in an array
// function printEvenNumbers(arr) {
  // console.log("Even numbers in the array:");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       // console.log(arr[i]);

//       console.log("Even numbers in the array: ", [arr[i]]);
//     }
//   }
// }

// Example usage
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printEvenNumbers(numbers);


// 2. Write a program to print the biggest number in an array
function findBiggestNumber(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  console.log(biggest);
}

// Example usage
findBiggestNumber([3, 7, 2, 9, 1, 5]);