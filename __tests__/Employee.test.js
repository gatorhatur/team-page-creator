const Employee = require('../lib/Employee');

describe('Employee Test', () => {
    const employee = new Employee('Brandon', 2, 'brancdavis@gmail.com');
    let { name: name, id: id, email: email } = employee

    describe('Should set basic properties', () => {
        

        it('Should have a name', () => expect(name).toEqual('Brandon'))
        it('Should have an employee number', () => expect(id).toEqual(2))
        it('Should have an email address', () => expect(email).toEqual('brancdavis@gmail.com'))
    })

    describe('Test getName method', () => {
        it('It should return the name of the employee', () => expect(employee.getName()).toEqual(name))
    })

    describe('Test getId method', () => {
        it('It should return the id of the employee', () => expect(employee.getId()).toEqual(id))
    })

    describe('Test getEmail method', () => {
        it('It should return the email of the employee', () => expect(employee.getEmail()).toEqual(email))
    })

    describe('Test getRole method', () => {
        it('It should return the role of the employee', () => expect(employee.getRole()).toEqual('Employee'))
    })
});