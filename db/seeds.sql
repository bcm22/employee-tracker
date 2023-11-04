INSERT INTO department(department_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Accounting"),
       ("Customer Service"),
       ("Product Managemant");

INSERT INTO role (title, department_id, salary)
VALUES ("Software Engineer I", 1, 75000),
       ("Software Engineer II", 1, 125000),
       ("IT Manager", 1, 100000),
       ("Advertising Agent", 2, 63000),
       ("Marketing Manager", 2, 90000),
       ("Accounts Receivable Rep", 3, 45000),
       ("Accounts Payable Rep", 3, 55000),
       ("Account Manager", 3, 73000),
       ("Customer Service Rep", 4, 45000),
       ("Customer Service Manager", 4, 60000),
       ("Product Support", 5, 55000),
       ("Quality Assurance Rep", 5, 73000),
       ("Quality Assurance Manager", 5, 102000);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("ethan", "parker", 1, null),
       ("olivia", "johnson", 1, null),
       ("ben", "adams", 1, 1),
       ("sophia", "martinez", 2, null),
       ("jackson", "carter", 2, 2),
       ("emma", "anderson", 3, null),
       ("lucas", "thompson",3 , null),
       ("mia", "davis", 3, 3),
       ("aiden", "white", 4, null),
       ("harper", "robinson", 4, 4),
       ("mason", "clark", 5, null),
       ("ava", "wilson", 5, null),
       ("liam", "harris", 5, 5);