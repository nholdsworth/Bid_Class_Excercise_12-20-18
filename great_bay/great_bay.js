// import npm packages 
mysql = require("mysql");
inquirer = require("inquirer")

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database: "great_bayDB",
});

connection.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected!");

    connection.query("SELECT*FROM great_bay;",function(err,res){
        if(err){
            throw err;
        }
        console.table(res);
    });
});

inquirer.prompt([
    // pass your question here 
    "Please input your bidding items"
]).then(answers=>{
    // Use user feedback for 

});