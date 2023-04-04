const express = require('express');
const mysql = require('mysql2');
const inq = require('inquirer');
require('dotenv').config();

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
    inq.prompt(
        [
            {
                type: 'list',
                name: 'main',
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
                ],
            },
        ]
    )
    .then(answer => {
        switch (answer.main) {
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