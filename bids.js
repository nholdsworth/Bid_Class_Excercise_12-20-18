var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '1234qwer',
    database: "great_bayDB"
})


connection.connect(function(err){
    if(err)
    {
        console.log("connection failed");
        throw err;       
    }
    else{
        console.log("connected");
    }
    
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

                connection.query("INSERT INTO great_bay(name, price, description) VALUES('"+ name + "', '" + price + "', '" + description + "');", function (err, result) {
                    if (err) throw err;
                    console.table("Inserted");
                });

            })

            
        }

        else if(inquirerResponse.commands === "BID ON AN ITEM")
        {
            var id = 0;
            var bid = 0;
            connection.query("SELECT * FROM great_bay", function (err, result) {
                if (err) throw err;
                console.log("\r\n");
                console.table(result);

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
                            name: "bid"
                        }
                    ])
                    .then(function(inquirerResponse) {
                        id = inquirerResponse.id;
                        bid = inquirerResponse.bid;

                        connection.query(" UPDATE great_bay SET price = " + bid + " WHERE id = " + id + " AND price < " + bid, function (err, result) {
                            if (err) throw err;
                            console.table("Updated");
                        });

                    })

            });

            
        }
  
  });

 