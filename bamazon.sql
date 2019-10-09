DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER NOT NUll,
    stock_quantity INTEGER NOT NULL
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES
('Kitten Mittens', 'Pets', '45', 2),
('Skateboard', 'Recreation', '149.99', 10),
('Bicycle', 'Recreation', '400', 6),
('Dog Bed', 'Pets', '65.50', 9),
('Xbox One X', 'Video Games', '449.99', 7),
('PS4', 'Video Games', '250', 3),
('Nintendo Switch', 'Video Games', '300', 2),
('AirPods', 'Audio', '149.99', 4),
('Fake AirPods', 'Audio', '34.99', 2),
('Numark Turntable', 'Audio', '199.99', 5)
;

