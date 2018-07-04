const numbers = [1, 2, 3, 4, 5]

const numbersTimesTwo = numbers.map(function(element, index, array) {
  return element * 2
})

const es6 = numbers.map(n => n * 2)

console.log('numbers', numbers)

console.log('numbersTimesTwo', numbersTimesTwo)

console.log('es6', es6)
