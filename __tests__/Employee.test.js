const Employee = require('../employees/Employee')
test('can create an object', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(typeof(employee)).toBe('object')
})
test('can set name', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.name).toBe('Kent')
})
test('can set id', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.id).toBe(744)
})
test('can set email', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.email).toBe('kentshaff@gmail.com')
})
test('can get name', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.getName()).toBe('Kent')
})
test('can get id', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.getId()).toBe(744)
})
test('can get email', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.getEmail()).toBe('kentshaff@gmail.com')
})
test('can get role', ()=>{
  const employee = new Employee('Kent', 744, 'kentshaff@gmail.com')
  expect(employee.getRole()).toBe('Employee')
})