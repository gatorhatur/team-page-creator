const inquirer = require('inquirer');


const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                question: 'What is your name?'
            },            
        ])
    .then(employeeData => employeeData)
}

module.exports = managerPrompt;