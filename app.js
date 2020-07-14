const logo = require("asciiart-logo")
const orm = require("./config/orm");
const inquirer = require("inquirer");

function init() {
    console.log(logo({name: "Employee Manager"}).render());
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ],
            name: "choice"
        }
    ]).then(data => {
        console.log(data);
    })
}

init();