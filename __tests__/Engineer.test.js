const Engineer = require('../employees/Engineer')
test('can get role', ()=>{
  const employee = new Engineer('Kent', 744, 'kentshaff@gmail.com', 'kentshaffer')
  expect(employee.getRole()).toBe('Engineer')
})
test('can get github', ()=>{
  const employee = new Engineer('Kent', 744, 'kentshaff@gmail.com', 'kentshaffer')
  expect(employee.getGithub()).toBe('kentshaffer')
})
test('can set github', ()=>{
  const employee = new Engineer('Kent', 744, 'kentshaff@gmail.com', 'kentshaffer')
  expect(employee.github).toBe('kentshaffer')
})