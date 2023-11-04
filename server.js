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

