const express = require('express');
const mysql = require('mysql2');
const inq = require('inquirer');

require('dotenv').config();

const { mainPrompt, addEmployee, addRole, addDepartment } = require('./resources/prompts');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to database.`)
);

app.use((req, res) => {
    res.status(404).end();
});
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const mainMenu = () => {
    inq.prompt(mainPrompt)
    .then(answer => {
        switch (answer.main) {
            // Views
            case 'View All Employees':
                db.query('SELECT * from employee', (err, results) => {
                    console.log('\n');
                    err
                    ? console.log(err)
                    : console.table(results);
                });
                break;
            case 'View All Roles':
                db.query('SELECT * from role', (err, results) => {
                    console.log('\n');
                    err
                    ? console.log(err)
                    : console.table(results);
                });
                break;
            case 'View All Departments':
                db.query('SELECT * from department', (err, results) => {
                    console.log('\n');
                    err
                    ? console.log(err)
                    : console.table(results);
                });
                break;
            // Adds
            case 'Add Employee':
                inq.prompt(addEmployee)
                .then(employee => {
                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
                    employee.first, employee.last, employee.role, employee.manager,
                    (err, results) => {
                        console.log('\n');
                        err
                        ? console.log(err)
                        : console.log(results);
                    });
                });
                break;
            case 'Add Role':
                inq.prompt(addRole)
                .then(role => {
                    db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', role.title, role.salary, role.department, (err, results) => {
                        console.log('\n');
                        err
                        ? console.log(err)
                        : console.log(results);
                    });
                });
                break;
            case 'Add Department':
                // only add that works for some reason. my bet is that the single variable.
                inq.prompt(addDepartment)
                .then(department => {
                    db.query('INSERT INTO department (department_name) VALUES (?)', department.name, (err, results) => {
                        console.log('\n');
                        err
                        ? console.log(err)
                        : console.log(results);
                    });
                });
                break;
            case 'Quit':
                process.exit(0);
                break;
            default:
                console.log('\n');
                console.log("No valid answer selected.");
                break;
        }
        main();
    });
}

function main() {
    mainMenu();
}

main();