const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')
const {managerPrompt,employeePrompt} = require('./utils/prompts');
const generateHtml = require('./utils/generateHtml');
const fs = require('fs')

managerPrompt()
    .then(managerData => employeePrompt([managerData]))
    .then(results => {
        return results.map(obj => {
            //destructure questions
            let { name: name, teamMemberRole: role, id: id, email: email, addTeamMember: extra, ...others } = obj;
            let roleStat = others[Object.keys(others)];
            //create new employee based on defined role
            switch (role) {
                case 'Manager':
                    return new Manager(name, id, email, roleStat);
                case 'Engineer':
                    return new Engineer(name, id, email, roleStat);
                case 'Intern':
                    return new Intern(name, id, email, roleStat);
            }
        })
    })
    .then(employeeObjArr => generateHtml(employeeObjArr))
    .then(html => {
        //create index.html for team web page
        fs.writeFile('./dist/index.html', html, err => {
            if (err) {
                console.log('There was an error: ',err)
                return
            }

            return;
        }) //copy css to ./dist directory
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return;
            }

            return;
        })
    })
    .then(() => {
        console.log("You team web page is now available in the ./dist directory. Please remember to follow best practice and create an ./assets/css/ directory for the stylesheet")
    });



