# bamazon

Welcome to the bamazon app. This is meant to emulate an online store. The items are fictitious as are the transactions. The password for the SQL database has been removed. However, if you copy the code and enter your own credentials, the app will work. You’ll need to install inquirier and mysql. In your console type

```ruby
npm install inquirer
```
```ruby
npm install mysql
```

To run the app (again, you’ll need to create your own mySQL database and enter your own credentials) type
```
$ node bamazon.js
```

The existing inventory will be displayed (again, this is completely fictitious). Below the inventory, you will be prompted to select an item. Enter the item's ID number only. 
```
Existing Inventory:
...................

Item ID: 21  //  Product Name: Fire TV Stick 4K  //  Department: Electronics  //  Price: $49.99

Item ID: 22  //  Product Name: Exploding Kittens Card Game  //  Department: Toys  //  Price: $19.99

Item ID: 23  //  Product Name: Wyze Cam 1080p HD  //  Department: Camera  //  Price: $25.99

Item ID: 24  //  Product Name: New Super Mario Bros. U Deluxe  //  Department: Video_Game  //  Price: $56.99

Item ID: 25  //  Product Name: Where the Crawdads Sing  //  Department: Books  //  Price: $16.2

Item ID: 26  //  Product Name: Blocking Glasses  //  Department: Clothing  //  Price: $16.99

Item ID: 27  //  Product Name: Jenga  //  Department: Toys  //  Price: $7.13

Item ID: 28  //  Product Name: Echo Dot  //  Department: Electronics  //  Price: $49.99

Item ID: 29  //  Product Name: Kindle Paperwhite  //  Department: Electronics  //  Price: $99.99

Item ID: 30  //  Product Name: Crocs Classic Cog  //  Department: Clothing  //  Price: $14.96

---------------------------------------------------------------------

? Please enter the Item ID which you would like to purchase.
```
Below the inventory, you will be prompted to select an item. Enter the item's ID number only. 
```
? Please enter the Item ID which you would like to purchase. 28
```
You will then be asked how many of the items you want.
```
? Please enter the Item ID which you would like to purchase. 28
? How many do you need? 1
```

Provided there are enough items are in stock, the order will be place and the total cost will be displayed.
```
? Please enter the Item ID which you would like to purchase. 28
? How many do you need? 1
Congratulations! The product you requested is in stock! Placing order!
Your order has been placed! Your total is $49.99
Thank you for shopping with us!
```