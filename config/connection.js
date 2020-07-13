const mysql = require("mysql");
const greeting =
`######## ##     ## ########  ##        #######  ##    ## ######## ########    ##     ##    ###    ##    ##    ###     ######   ######## ########  
##       ###   ### ##     ## ##       ##     ##  ##  ##  ##       ##          ###   ###   ## ##   ###   ##   ## ##   ##    ##  ##       ##     ## 
##       #### #### ##     ## ##       ##     ##   ####   ##       ##          #### ####  ##   ##  ####  ##  ##   ##  ##        ##       ##     ## 
######   ## ### ## ########  ##       ##     ##    ##    ######   ######      ## ### ## ##     ## ## ## ## ##     ## ##   #### ######   ########  
##       ##     ## ##        ##       ##     ##    ##    ##       ##          ##     ## ######### ##  #### ######### ##    ##  ##       ##   ##   
##       ##     ## ##        ##       ##     ##    ##    ##       ##          ##     ## ##     ## ##   ### ##     ## ##    ##  ##       ##    ##  
######## ##     ## ##        ########  #######     ##    ######## ########    ##     ## ##     ## ##    ## ##     ##  ######   ######## ##     ##`;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "maverick",
  database: "employeesDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id:", connection.threadId, "\n");
  console.log(greeting);
});

module.exports = connection;
