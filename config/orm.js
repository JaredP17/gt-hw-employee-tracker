const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  viewEmployees: function (tableInput, cb) {
    queryString = 
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, concat(e2.first_name, ' ', e2.last_name) AS manager
    FROM employee e
    LEFT JOIN role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id
    LEFT JOIN employee e2 ON e.manager_id = e2.id;`;
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  exit: function () {
    // End the db connection
    connection.end();
  },
};

module.exports = orm;
