const Manager = require('../lib/Manager');

describe('Manager Testing', () => {
    const manager = new Manager('Brandon', '12', 'test@test.com', '012')
    let { name, id, email, officeNumber } = manager;

    describe('Test that Manager inherits the the properties of Employee', () => {
        it('Should have a name', () => {
            expect(name).toEqual('Brandon')
        })
        it('Should have an id', () => {
            expect(id).toEqual('12')
        })
        it('Should have an email', () => {
            expect(email).toEqual('test@test.com')
        })
    })

    describe('Test that Manager inherits Employee Prototypes', () => {
        it('Should return name', () => {
            expect(manager.getName()).toEqual(name)
        })
        it('Should return id', () => {
            expect(manager.getId()).toEqual(id)
        })
        it('Should return email', () => {
            expect(manager.getEmail()).toEqual(email)
        })
    })

    describe('Test that Manager officeNumber property gets populated', () => {
        it('Should have a officeNumber user', () => {
            expect(officeNumber).toEqual('012');
        })
    })

    describe('Test that manager prototypes are working', () => {
        it('Should return manager instead of employee', () => {
            expect(manager.getRole()).toEqual('Manager')
        })
    })

})