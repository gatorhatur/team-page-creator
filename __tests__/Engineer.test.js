const Engineer = require('../lib/Engineer');

describe('Engineer Testing', () => {
    const engineer = new Engineer('Brandon', '12', 'test@test.com', 'gatorhatur')
    let { name, id, email, github } = engineer;

    describe('Test that Engineer inherits the the properties of Employee', () => {
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

    describe('Test that Engineer inherits Employee Prototypes', () => {
        it('Should return name', () => {
            expect(engineer.getName()).toEqual(name)
        })
        it('Should return id', () => {
            expect(engineer.getId()).toEqual(id)
        })
        it('Should return email', () => {
            expect(engineer.getEmail()).toEqual(email)
        })
    })

    describe('Test that Engineer github property gets populated', () => {
        it('Should have a github user', () => {
            expect(github).toEqual('gatorhatur');
        })
    })

    describe('Test that engineer prototypes are working', () => {
        it('Should return the github user', () => {
            expect(engineer.getGithub()).toEqual(github);
        })
        it('Should return engineer instead of employee', () => {
            expect(engineer.getRole()).toEqual('Engineer')
        })
    })

})