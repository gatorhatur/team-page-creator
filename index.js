const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')
const {managerPrompt,employeePrompt} = require('./utils/prompts');


//const employee = new Employee('Brandon', '1234', 'test@email.com');




managerPrompt()
    .then(managerData => employeePrompt([managerData]))
    .then(results => {
        return results.map(element => {
            //destructure element
            let { name: name, teamMemberRole: role, id: id, email: email, addTeamMember: extra, ...others } = element;
            //create new employee based on defined role
            switch (role) {
                case 'Manager':
                    return new Manager(name, id, email, others[0]);
                case 'Engineer':
                    return new Engineer(name, id, email, others[0]);
                case 'Intern':
                    return new Intern(name, id, email, others[0]);
            }
        })
    })
    .then(employeeObjArr => console.log(employeeObjArr));



