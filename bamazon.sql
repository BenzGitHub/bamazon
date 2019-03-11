CREATE database bamazon
				USE bamazon;
                CREATE TABLE products (
				item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
				product_name VARCHAR(30) NOT NULL,
				department_name VARCHAR(20) NOT NULL,
				price DECIMAL(10,2) NOT NULL,
				stock_quantity INTEGER(11) NOT NULL,
				PRIMARY KEY (item_id)
				);
                
                USE bamazon;
                INSERT INTO products (product_name, department_name, price, stock_quantity)
				VALUES  
				('Fire TV Stick 4K', 'Electronics', 49.99, 627),
				('Exploding Kittens Card Game', 'Toys', 19.99, 300),
				('Wyze Cam 1080p HD', 'Camera', 25.99, 400),
				('New Super Mario Bros. U Deluxe', 'Video_Game', 56.99, 800),
				('Where the Crawdads Sing', 'Books', 16.20, 10000),
				('Blocking Glasses', 'Clothing', 16.99, 267),
				('Jenga', 'Toys', 7.13, 200),
				('Echo Dot', 'Electronics', 49.99, 476),
				('Kindle Paperwhite', 'Electronics', 99.99, 575),
				('Crocs Classic Cog', 'Clothing', 14.96, 423);
                
                USE bamazon;
                UPDATE products
				SET stock_quantity=5
				WHERE product_name='New Super Mario Bros. U Deluxe';
                
                USE bamazon;
                UPDATE products
				SET stock_quantity=3
				WHERE product_name='Crocs Classic Cog';