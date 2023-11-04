const inquirer = require("inquirer");
const connection = require("./config/connection");

const getAllDept = () => {
    const sql = "SELECT id, department_name FROM department";
    connection.query(sql, (err, res) => {
        if (err) {
            console.log("error retrieving departments");
            return prompts ();
        }
        console.table(res);
        return prompts();
    });
};

const getAllRoles = () => {
    const sql = "SELECT id, title, salary, department_id FROM role";
    connection.query(sql, (err, res) => {
        if (err) {
            console.log("error retrieving roles");
            return prompts();
        }
        console.table(res);
        return prompts();
    });
};

const getAllEmployees = () => {
    const sql = "SELECT id, first_name, last_name, role_id, manager_id FROM employee";
    connection.query(sql, (err, res) => {
        if (err) {
            console.log("error retrieving roles");
            return prompts();
        }
        console.table(res);
        return prompts();
    });
};

const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "what is the name of the department you wish to add?",
            },
        ])
        .then((data) => {
            const newDepartment = { name: data.department };
            const sql = "INSERT INTO depertment SET ?";
            connection.query(sql, newDepartment, (err, res) => {
                if (err) {
                    console.log("error adding department");
                    return prompts();
                }
                console.table(res);
                return prompts();
            });
        });
};

const addEmployee = () => {
    const deptOptions = [
        "Engineering",
        "Marketing",
        "Accounting",
        "Customer Service",
        "Product Management",
    ];
    const roleOptions = [
        "Software Engineer I",
        "Software Engineer II",
        "IT Manager",
        "Advertising Agent",
        "Marketing Manager",
        "Accounts Receivable Rep",
        "Accounts Payable Rep",
        "Account Manager",
        "Customer Service Rep",
        "Customer Service Manager",
        "Product Support",
        "Quality Assurance Rep",
        "Quality Assurance Manager",
    ];
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the first name of the new employee to be added?",
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the last name of the new employee to be added?",
            },
            {
                name: "department_id",
                type: "list",
                message: "In which department would you like to add the new employee?",
                choices: deptOptions,
            },
            {
                name: "role_id",
                type: "list",
                message: "What is the role of the new employee?",
                choices: roleOptions,
            },
        ])
        .then((data) => {
            const newEmployee = {
                first_name: data.first_name,
                last_name: data.last_name,
                department_id: department_id,
                role_id: role_id,
            };
            const sql = "INSERT INTO employee SET ?";
            connection.query(sql, newEmployee, (err, res) => {
                if (err) {
                    console.log("error adding employee");
                    return prompts();
                }
                console.table(res);
                return prompts();
            });
        });
};

const exitProgram = () => {
    console.log('Exit Database');
    process.exit(0);
};

const prompts = () =>
    inquirer
        .prompt([
            {
                name: "selection",
                type: "list",
                message: "select an option",
                choices: [
                    "view all departments",
                    "view all roles",
                    "view all employees",
                    "add a department",
                    "add a role",
                    "add an employee",
                    "update an employee role",
                    "exit",
                ],
            },
        ])
        .then((answer) => {
            switch (answer.selection) {
                case "view all departments":
                    getAllDept();
                    break;
                case "view all roles":
                    getAllRoles();
                    break;
                case "add a department":
                    addDepartment();
                    break;
                case "add a role":
                    addRole();
                    break;
                case "add an employee":
                    addEmployee();
                    break;
                case "update an employee role":
                    updateRole();
                    break;
                case "exit":
                    exitProgram();
                    break;
                default:
                    console.log("OPTION NOT FOUND");
                    return prompts();
            }
        });

    prompts();
