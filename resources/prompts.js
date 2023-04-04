const inq = require('inquirer');

const mainPrompt = [
    {
        type: 'list',
        name: 'main',
        loop: false,
        prefix: '',
        message: 'What would you like to do?',
        choices: [
            new inq.Separator(),
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit',
            new inq.Separator(),
        ],
    },
];

module.exports = { mainPrompt };