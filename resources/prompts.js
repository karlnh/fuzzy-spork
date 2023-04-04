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

const addEmployee = [
    {
        type: 'input',
        name: 'first',
        message: `Enter employee's first name.`,
    },
    {
        type: 'input',
        name: 'last',
        message: `Enter employee's last name.`,
    },
    {
        type: 'input',
        name: 'role',
        message: `Enter employee's role ID.`,
    },
    {
        type: 'input',
        name: 'manager',
        message: `Enter employee's manager ID.`,
        default: 'NULL',
    },
];

const addRole = [
    {
        type: 'input',
        name: 'title',
        message: `Enter role title.`,
    },
    {
        type: 'input',
        name: 'salary',
        message: `Enter role salary.`,
    },
    {
        type: 'input',
        name: 'department',
        message: `Enter role department id.`,
    },
];

const addDepartment = {
    type: 'input',
    name: 'name',
    message: `Enter the department's name.`,
};

module.exports = { mainPrompt, addEmployee, addRole, addDepartment };