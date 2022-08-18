const Manager = require('../employees/Manager')
test('can get role', ()=>{
  const employee = new Manager('Kent', 744, 'kentshaff@gmail.com', 23)
  expect(employee.getRole()).toBe('Manager')
})
test('can get office number', ()=>{
  const employee = new Manager('Kent', 744, 'kentshaff@gmail.com', 23)
  expect(employee.getOfficeNumber()).toBe(23)
})
test('can get office number', ()=>{
  const employee = new Manager('Kent', 744, 'kentshaff@gmail.com', 23)
  expect(employee.officeNumber).toBe(23)
})