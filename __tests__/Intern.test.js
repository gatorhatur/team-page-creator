const Intern = require('../lib/Intern');

describe('Intern Testing', () => {
    const intern = new Intern('Brandon', '12', 'test@test.com', 'ashland')
    let { name, id, email, school } = intern;

    describe('Test that Intern inherits the the properties of Employee', () => {
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

    describe('Test that Intern inherits Employee Prototypes', () => {
        it('Should return name', () => {
            expect(intern.getName()).toEqual(name)
        })
        it('Should return id', () => {
            expect(intern.getId()).toEqual(id)
        })
        it('Should return email', () => {
            expect(intern.getEmail()).toEqual(email)
        })
    })

    describe('Test that Intern school property gets populated', () => {
        it('Should have a school name', () => {
            expect(school).toEqual('ashland');
        })
    })

    describe('Test that intern prototypes are working', () => {
        it('Should return the school', () => {
            expect(intern.getSchool()).toEqual(school);
        })
        it('Should return intern instead of employee', () => {
            expect(intern.getRole()).toEqual('Intern')
        })
    })

})