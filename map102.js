const people = [
  { name: 'Jeff', age: 23 },
  { name: 'Jennifer', age: 34 },
  { name: 'James', age: 83 },
  { name: 'Johnny', age: 19 },
  { name: 'Jorge', age: 41 }
]

const sentences = people.map(function(person, index) {
  return index + 1 + '. ' + person.name + ' is ' + person.age + ' years old.'
})

const es6 = people.map((p, i) => `${i + 1}. ${p.name} is ${p.age} years old.`)

console.log('sentences', sentences)

console.log('es6', es6)
