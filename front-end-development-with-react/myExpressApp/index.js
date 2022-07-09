
const mysql = require('mysql2');  
const express = require('express');  
var app = express();  
const bodyparser = require('body-parser');  
  
// Used for sending the Json Data to Node API  
app.use(bodyparser.json());  
  
// Connection String to Database  
var mysqlConnection = mysql.createConnection({  
    host: "localhost",
    user: "root",
    password: "Password",
    database: "modeling",
    port: 13306,
    insecureAuth : true,
    multipleStatements : true  
});  
  
// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
  
// To Run the server with Port Number  
app.listen(3000,()=> console.log("Express server is running at port no : 3000"));  
  
// CRUD Methods  
//Get all Employees  
app.get('/testdata',(req,res)=>{  
    mysqlConnection.query('SELECT * FROM test;',(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
        console.log(err);  
      
})  
});  

//" code from other source"
/* const express = require("express");
const app = express();
const port = 3000;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const { getMultiple } = require("./services/programmingLanguages");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/programming-languages", getMultiple);
/* Error handler middleware 
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 */

// Importing the packages required for the project.  


// new version

