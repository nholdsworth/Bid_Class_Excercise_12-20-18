var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: 'great_bayDB'
})

connection.connect(function(err){
    if(err)
    {
        throw err;       
    }
    console.log("connected")
  })

var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      message: "Choose a command",
      choices: ["POST AN ITEM", "BID ON AN ITEM"],
      name: "commands"
    }
  ])
  .then(function(inquirerResponse) {
        if(inquirerResponse.commands === "POST AN ITEM")
        {
            var name = "";
            var price = 0;
            var description = "";
            inquirer
            .prompt([
                {
                type: "input",
                message: "Item name here",
                name: "item"
                },

                {
                type: "input",
                message: "price here",
                name: "price"
                },

                {
                    type: "input",
                    message: "description here",
                    name: "description"
                }
            ])
            .then(function(inquirerResponse) {
                name = inquirerResponse.item;
                price = inquirerResponse.price;
                description = inquirerResponse.description;
            })

            connection.query("INSERT INTO great_bay(name, price, description) VALUES('"+ name + "', '" + price + "', '" + description +"');", function (err, result) {
                if (err) throw err;
                console.table(result);
            });
        }

        else if(inquirerResponse.commands === "BID ON AN ITEM")
        {
            
            connection.query("SELECT * FROM great_bay", function (err, result) {
                if (err) throw err;
                console.table(result);
            });

            inquirer
            .prompt([
                {
                    type: "input",
                    message: "item id",
                    name: "id"
                },
                {
                    type: "input",
                    message: "bid price",
                    name: "price"
                }
            ])
            .then(function(inquirerResponse) {
                
                
            })
        }

        

        
        }
    
  });

 