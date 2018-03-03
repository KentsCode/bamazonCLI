/*DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;*/

USE bamazon;



/*CREATE TABLE products(
	item_id INT(10) auto_increment NOT NULL,
	product_name VARCHAR(50) NULL,
	department_name VARCHAR(25) NULL,
	price DECIMAL(5, 2) NULL,
	stock_quantity INT(4) NULL,
	PRIMARY KEY (item_id)
 );
 */
 
 
/*USE topsongs;
SELECT * FROM topsongs.top5000;*/




INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motorcycle Jacket", "Motorcycle Gear", 152.75, 7),
	("Motorcycle Gloves", "Motorcycle Gear", 45.27, 10),
    ("Motorcycle Helmet", "Motorcycle Gear", 475.94, 6),
    ("Motorcycle Boots", "Motorcycle Gear", 182.66, 3),
    ("Climbing Shoes", "Rock Climbing", 126.33, 9),
    ("Snowboard", "Winter Sports", 725.44, 15),
    ("Skiis", "Winter Sports", 518.62, 12),
    ("Snowboard Boots", "Winter Sports", 218.14, 15),
    ("Skii Boots", "Winter Sports", 174.23, 12),
    ("Climbing Harness", "Rock Climbing", 53.88, 6),
    ("Belay Device", "Rock Climbing", 48.84, 4);