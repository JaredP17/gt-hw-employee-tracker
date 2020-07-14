const logo = require("asciiart-logo");
const orm = require("./config/orm.js");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

function init() {
  console.log(logo({ name: "Employee Manager" }).render());
  prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        { name: "View All Employees", value: "VIEW" },
        { name: "View All Employees By Department", value: "VIEW_DEP" },
        { name: "View All Employees By Manager", value: "VIEW_MNGR" },
        { name: "Add Employee", value: "ADD" },
        { name: "Remove Employee", value: "REMOVE" },
        { name: "Update Employee Role", value: "UD_ROLE" },
        { name: "Update Employee Manager", value: "UD_MGR" },
        "Exit",
      ],
      pageSize: 8,
      name: "choice",
    },
  ]).then((data) => {
    const { choice } = data;

    
  });
}

init();
