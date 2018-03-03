var inquirer = require('inquirer');
var mysql = require('mysql');
const cTable = require('console.table');

var updateQuantity;
var checkQuantity;
var itemQuantity;

function customerInterface() {
  inquirer.prompt([
 {
   type: 'input',
   name: 'order',
   message: "Which item would you like to purchase?"
 },
 {
   type: 'input',
   name: 'quantity',
   message: "How many would you like?"
 }
 
]).then(  

  function (answers) {
    //console.log(answers.order);
    //console.log(answers.quantity);
    
   
   checkQuantity = "SELECT * FROM bamazon.products WHERE item_id = " + answers.order;
   mySqlServer.query(checkQuantity, function(err, result) {
    if (err) throw err;
    //console.log(result[0].stock_quantity);
    itemQuantity = result[0].stock_quantity;
    //console.log(itemQuantity);
    //console.log(answers.quantity);
    }).then(

    function orderEntry () {      
    if (answers.quantity > itemQuantity) {
      console.log("Insufficient Quantity");
      mySqlServer.end();
      return;
    } else {

      updateQuantity = "UPDATE bamazon.products SET stock_quantity = stock_quantity - " + answers.quantity + " WHERE item_id = " + answers.order + ""
      mySqlServer.query(updateQuantity, function(err, result) {
        if (err) throw err;
        //console.log(result);
      });

      mySqlServer.query(checkQuantity, function(err, result) {
        if (err) throw err;
        console.log("Your order of " + answers.quantity + " " + result[0].product_name + " has been received.");
        
        });
      }
    })
    mySqlServer.end();
  })};


var mySqlServer = mysql.createConnection({
    host: "localhost",
	port: 3306,
	user: "root",
	password: "2003Sv650",
	database: "bamazon"
  });
   
  mySqlServer.connect();
   
  mySqlServer.query('SELECT * FROM bamazon.products;', function (error, results, fields) {
    if (error) throw error;

    console.table(results);
    customerInterface();

    
  })
    

  
   
 