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

//Exercise 4
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//Examples:
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"
//My Answer
let string = 'The quick brown fox jumps over the lazy dog.';
function reverseWords(str) {
    let words = str.split(' ');
    for (const word of words) {
        word.split('').reverse().join('');
    }
<<<<<<< HEAD
    return words
}
console.log(reverseWords(string))
=======
    return str
}
console.log(reverseWords(string))
>>>>>>> 769fd3a6cd2c4a4b2e1afcbc34f9f0f139191dca
