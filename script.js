"use strict"


// Destructuring



// 1. Write a program that defines an object with properties name, age, and email. Use destructuring to assign each property to a variable with a different name. Then, output the variables to the console.




// const obj={
//   name: "Usama",
//   age:23,
//   email:"usamakhan@gmail.com"
  
// }

// let {name: personName,age: personAge,email: personEmail}=obj
// console.log(`PersonName: ${personName}, PersonsAge: ${personAge},PersonsEmailID: ${personEmail}`)
  



// 2. Write a function that takes an object with properties firstName and lastName as an argument and returns the full name by using destructuring.






// let obj={
//   firstName: "Harry",
//   lastName: "Wiliams"
// }

// const func=( {firstName,lastName})=>{
//     console.log(`FullName: ${firstName} ${lastName}`)
// }
// func(obj);



// Spread Operator


// 1. Write a program that defines two arrays arr1 and arr2, each with three numbers. Use the spread operator to create a new array arr3 that contains all the numbers from both arrays. Then, output arr3 to the console.






// let arr1=[21,22,23]
// let arr2=[24,25,26]
// let arr3=[...arr1,...arr2];
// console.log(arr3);
  
  
  
  
  
  
// 2. Write a function called getLargest that takes an array of numbers as an argument and returns the largest number in the array. Use the spread operator to pass the array to the Math.max() function.





// let array=[23,567,323,75,786]
// const getLargest=(array)=>{
//   console.log("The Largest number is :",Math.max(...array)) 
// }
// getLargest(array)




// Rest Operator



// 1. Write a function called sum that takes any number of arguments and returns their sum. Use the rest operator to allow the function to take any number of arguments.





// var num=0;
// const sum=(...numbers)=>{
//     for(const elements of numbers){
//        num=num + elements;
//     }
//     return num;
// }
// sum(2,3,5,2,3);
// console.log(num);




// 2. Write a program that prompts the user to enter an array of numbers and then passes the array to a function called calculateAverage. The function should calculate the average of the numbers using the rest operator and return the result. Then, output const calculateAverage = (...numbers) => {






// let sum=0
// const calculateAverage=(...numbers)=>{
//   for(const elements of numbers){
//     sum=sum+elements;


//   }
//   return sum/numbers.length;
// }

// const input = prompt("Enter a list of numbers separated by commas:");
// const numbersAsString = input.split(',');

// const numbers = numbersAsString.map(number => parseFloat(number));

// const average = calculateAverage(...numbers);
// console.log("Average:", average);

