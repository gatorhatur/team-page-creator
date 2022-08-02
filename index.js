const Employee = require('./lib/Employee');


const employee = new Employee('Brandon', '1234', 'test@email.com');

console.log(employee.getEmail());