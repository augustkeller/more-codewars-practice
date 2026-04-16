// //Exercise 1
// //Complete the square sum function so that it squares each number passed into it and then sums the results together.
// //My Answer
// function squareSum(numbers){
//     let squares = [];
//     for (const number of numbers) {
//         squares.push(number*number)
//     }
//     return squares.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// }
// //Top Answer
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

// //Exercise 2
// //Given an array of integers, return a new array with each value doubled.
// //For example: [1, 2, 3] --> [2, 4, 6]
// //My Answer
// function maps(x){
//     let doubles = [];
//     for (const num of x) {
//         doubles.push(num*2)
//     }
//     return doubles;
// }
// //Top Answer
// function maps(x){
//   return x.map(n => n * 2);
// }

// //Exercise 3
// //You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// //Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// //Function should return true if it is possible and false if not.
// //My Answer
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump <= mpg*fuelLeft;
// };
// //Top Answer
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump/mpg <= fuelLeft
// };

// //Exercise 4
// //Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// //Examples:
// //"This is an example!" ==> "sihT si na !elpmaxe"
// //"double  spaces"      ==> "elbuod  secaps"
// //My Answer
// function reverseWords(str) {
//     let words = str.split(' ');
//     let results = [];
//     for (const word of words) {
//         results.push(word.split('').reverse().join(''));
//     }
//     return results.join(' ')
// }
// //Top Answer
// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }

// //Exercise 5
// //Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// //Example:['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// //My Answer
// function smash (words) {
//    return words.join(" ");
// };
// //Top Answer
// smash = function (words) {
//   return words.join(" ");
// };

// //Exercise 6
// //Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
// //Example: [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// //My Answer
// var min = function(list){
//     return Math.min(...list);
// }
// var max = function(list){
//     return Math.max(...list);
// }
// //Top Answer
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// //Exercise 7
// //Complete the solution so that it reverses the string passed into it.
// //Example:
// //'world'  =>  'dlrow'
// //'word'   =>  'drow'
// function solution(str){
//   if (str <= 1) {
//     return str;
//   }
//   return str[str.length - 1] + solution(str.slice(0, -1));
// }

// //Exercise 8
// //We need a function that can transform a number (integer) into a string.
// //Example:
// //123  --> "123"
// // 999  --> "999"
// // -100 --> "-100"
// function numberToString(num) {
//   return num.toString();
// }

// //Exercise 9
// //Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
// //Example:
// // * Input: [1,2,3,4,5], output = [2,3,4,5]
// // * Input: [5,3,2,1,4], output = [5,3,2,4]
// // * Input: [2,2,1,2,1], output = [2,2,2,1]
// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   const beforeMin = numbers.slice(0, numbers.indexOf(min))
//   const afterMin = numbers.slice(numbers.indexOf(min) + 1, numbers.length)
//   const combined = [...beforeMin, ...afterMin];
//   return combined;
// }
// //Top Answer
// // function removeSmallest(numbers) {
// //   let indexOfMin = numbers.indexOf(Math.min(...numbers));
// //   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// // }

//Exercise 10
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  for (let i = 0; i < x.length; i++) {
    
  }
}