const mixedVariables = [
  1,
  2,
  false,
  'baseball',
  'golf',
  3,
  true,
  'tennis',
  9,
  7,
  'football'
]

const sports = mixedVariables.filter(mv => typeof mv === 'string')
const numbers = mixedVariables.filter(mv => typeof mv === 'number')

console.log('sports', sports)
console.log('numbers', numbers)
