INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Human Resources"),
       ("Information Technology");

INSERT INTO role (title, salary, department_id)
VALUES  ("Engineer", 80000, 1),
        ("Marketer", 70000, 2),
        ("Recruiter", 50000, 3),
        ("IT Specialist", 100000, 4),
        ("Lead Engineer", 90000, 1),
        ("Director of Marketing", 80000, 2),
        ("Talent Management Specialist", 60000, 3),
        ("Network Administrator", 110000, 4),
        ("President", 300000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Charlotte", "Roberts", 1, 5),
        ("Zarif", "Toma", 2, 6),
        ("Darcy", "Sweet", 3, 7),
        ("Bianca", "Lima", 4, 8),
        ("Bilqiz", "Masaev", 5, 9),
        ("Tena", "Varga", 6, 9),
        ("Aman", "Asmara", 7, 9),
        ("Anna", "Kawai", 8, 9),
        ("John", "Goodman", 9, null);