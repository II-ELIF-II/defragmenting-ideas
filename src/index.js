import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'));

// const mysql = require('mysql2')

// // Create the connection to the database
// const connection = mysql.createConnection(process.env.REACT_APP_API_KEY)

// // simple query
// connection.query('show tables', function (err, results, fields) {
//   console.log(results) // results contains rows returned by server
//   console.log(fields) // fields contains extra metadata about results, if available
// })

// // Example with placeholders
// connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
//   console.log(results)
// })

// connection.end()