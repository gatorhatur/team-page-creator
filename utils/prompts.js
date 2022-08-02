const inquirer = require('inquirer');



const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                question: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                question: 'What is your Employee ID'
            },
            {
                type: 'input',
                name: 'email',
                question: 'What is your email address',
                validate: userInput => {
                    if (!userInput.includes('@')) {
                        console.log('You must enter a valid email address');
                        return false;
                    }
                    
                    return true;
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                question: 'What is your office number?'
            }
        ])
    .then(employeeData => employeeData)
}

const employeePrompt = role => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                question: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                question: 'What is your Employee ID'
            },
            {
                type: 'input',
                name: 'email',
                question: 'What is your email address',
                validate: userInput => {
                    if (!userInput.includes('@')) {
                        console.log('You must enter a valid email address');
                        return false;
                    }
                    
                    return true;
                }
            },
            {
                type: 'input',
                name: 'github',
                question: 'Enter the engineers github username',
                when: () => {
                    return (role === 'Engineer') ? true : false
                }
            },
            {
                type: 'input',
                name: 'school',
                question: 'What school does the intern attend?',
                when: () => {
                    return (role === 'Intern') ? true : false
                }
            }
        ])
        .then(employeeData => employeeData);
}

module.exports = managerPrompt;