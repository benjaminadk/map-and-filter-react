var doctors = [
  { name: 'Smith', specialty: 'Pediatrics', testScore: 94 },
  { name: 'Jones', specialty: 'Pediatrics', testScore: 88 },
  { name: 'Williams', specialty: 'Cardiology', testScore: 91 },
  { name: 'Singh', specialty: 'Pediatrics', testScore: 99 },
  { name: 'Johnson', specialty: 'Immunology', testScore: 90 }
]

const hired = doctors.filter(d => {
  return d.specialty === 'Pediatrics' && d.testScore >= 95
})

console.log('hired', hired)
