const inquirer = require('inquirer');


//ask manager questions pointed wowards them
const managerPrompt = () => {
    console.log(`Hello Manager!\nLet's build you a custom team site for customers to get to know your team!\nLet's start with you:\n`);
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Employee ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address',
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
                message: 'What is your office number?'
            }
        ])
        .then(employeeData => {
            employeeData['teamMemberRole'] = 'Manager'
            return employeeData;
        })
}

//Ask employee specific questions
const employeePrompt = (employeeArr=[]) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            },
            {
                type: 'list',
                name: 'teamMemberRole',
                choices: ['Engineer', 'Intern'],
                message: "What is the employee's role",
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the employee's ID`
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email address",
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
                message: "Enter the engineer's github username",
                when: ({teamMemberRole}) => (teamMemberRole === 'Engineer') ? true : false               
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern attend?',
                when: ({teamMemberRole}) => (teamMemberRole === 'Intern') ? true : false
                
            },
            {
                type: 'confirm',
                name: 'addTeamMember',
                message: 'Would you like to add another team member?',
                default: false
            }
        ])
        .then(employeeData => {
            employeeArr.push(employeeData)
            return employeeData.addTeamMember ? employeePrompt(employeeArr) : employeeArr
        });
}

module.exports = { managerPrompt, employeePrompt };