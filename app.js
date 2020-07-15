const orm = require("./config/orm.js");
const logo = require("asciiart-logo");
const table = require("console.table");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

// Start program
console.log(logo({ name: "Employee Manager" }).render());
init();

// Functions
// Initialize application
function init() {
  prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        { name: "View All Employees", value: "VIEW_EMP" },
        { name: "View All Employees By Department", value: "VIEW_EMP_DEP" },
        { name: "View All Employees By Manager", value: "VIEW_EMP_MGR" },
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
      case "VIEW_EMP":
        orm.viewEmployees("employee", (data) => {
          console.log('\n');
          console.table(data);
          init();
        });
        break;

      case "VIEW_EMP_DEP":
        console.log('\n', "Feature in development", '\n');
        init();
        break;

      case "VIEW_EMP_MGR":
        console.log('\n', "Feature in development", '\n');
        init();
        break;

      case "ADD":
        console.log('\n', "Feature in development", '\n');
        init();
        break;

      case "REMOVE":
        console.log('\n', "Feature in development", '\n');
        init();
        break;

      case "UD_ROLE":
        console.log('\n', "Feature in development", '\n');
        init();
        break;

      case "UD_MGR":
        console.log('\n', "Feature in development", '\n');
        init();
        break;

      default:
        // Exit application
        console.log("Exiting application...\n");
        orm.exit();
        break;
    }
  });
}
