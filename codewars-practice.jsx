//Exercise 1
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//My Answer
function squareSum(numbers){
    let squares = [];
    for (const number of numbers) {
        squares.push(number*number)
    }
    return squares.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
//Top Answer
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

//Exercise 2
//Given an array of integers, return a new array with each value doubled.
//For example: [1, 2, 3] --> [2, 4, 6]
//My Answer
function maps(x){
    let doubles = [];
    for (const num of x) {
        doubles.push(num*2)
    }
    return doubles;
}
//Top Answer
function maps(x){
  return x.map(n => n * 2);
}