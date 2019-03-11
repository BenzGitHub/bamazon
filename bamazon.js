// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'B00tc@mpSQL',
	database: 'Bamazon'
});

// Makes sure that the user supplies positive numbers
function validateInput(value) {
    // I misspelled interger (var integeger). It took a LOT of frustration to figure out.
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;        
    }   else {
        return 'Please enter a whole non-zero number.';
    }
}

// Prompts the user to select the item and quantity they would like to purchase
function promptUserPurchase() {
    inquirer.prompt([
        {
            type: 'imput',
            name: 'item_id',
            message: 'Please enter the Item ID which you would like to purchase.',
            validate: validateInput,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many do you need?',
            validate: validateInput,
            filter: Number
        }
    ]).then(function(input) {
        var item = input.item_id;
        var quantity = input.quantity;

        // Checks if the item is in the database
        var queryStr = 'SELECT * FROM products WHERE?';

        connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			// Provides an eror if the user has selected an invalid item ID

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				displayInventory();

			} else {
				var productData = data[0];

				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations! The product you requested is in stock! Placing order!');

					// Updates the stock quantity
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					
					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your order has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock. Your order can not be placed as is.');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

// Retrieves the item for the database 
function displayInventory() {
	
	queryStr = 'SELECT * FROM products';

	// I misspelled "function" it took a while to find the error!
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	promptUserPurchase();
	})
}

function runBamazon() {
    displayInventory();
}

runBamazon();
