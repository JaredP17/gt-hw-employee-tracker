const { orm, connection } = require("./config/orm.js");
const logo = require("asciiart-logo");
const table = require("console.table");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

// Run
init();

// Functions
// Initialize application
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
    // Get user choice from data
    const { choice } = data;
    // console.log(data);

    switch (choice) {
      case "VIEW":
        break;

      case "VIEW_DEP":
        break;

      case "VIEW_MGR":
        break;

      case "ADD":
        break;

      case "REMOVE":
        break;

      case "UD_ROLE":
        break;

      case "UD_MGR":
        break;

      default:
        // Exit application
        console.log("Exiting application...\n");
        connection.end();
        break;
    }
  });
}
