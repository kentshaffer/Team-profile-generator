const Intern = require('../employees/Intern')
test('can get role', ()=>{
  const employee = new Intern('Kent', 744, 'kentshaff@gmail.com', 'someUniversity')
  expect(employee.getRole()).toBe('Intern')
})
test('can get school', ()=>{
  const employee = new Intern('Kent', 744, 'kentshaff@gmail.com', 'someUniversity')
  expect(employee.getSchool()).toBe('someUniversity')
})
test('can set school', ()=>{
  const employee = new Intern('Kent', 744, 'kentshaff@gmail.com', 'someUniversity')
  expect(employee.school).toBe('someUniversity')
})