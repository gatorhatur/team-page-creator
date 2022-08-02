const Employee = require('./lib/Employee');
const prompt = require('./utils/prompts');


const employee = new Employee('Brandon', '1234', 'test@email.com');

console.log(employee.getEmail());

const answers = prompt().then(result => console.log(result));



