-- create a database using workbench
DROP DATABASE IF EXISTS great_bayDB;
-- create the database
CREATE DATABASE great_bayDB;
-- use the database
USE great_bayDB;
-- call the database from IDE, 'password' can be changed
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE great_bay(
	-- id for all items
	ID INTEGER(30) AUTO_INCREMENT NOT NULL,
	-- name of items
    name VARCHAR(30) NOT NULL,
	-- single price of items
    price VARCHAR(30),
    --  type of items
    category VARCHAR(30),
    
    comments VARCHAR(100),
    
    PRIMARY KEY(ID)
);

INSERT INTO great_bay (name, price,category,comments)
VALUES ("blue shell", 12 ,"sea food","found on the beach");

INSERT INTO great_bay (name, price,category,comments)
VALUES ("myalbum", 20 ,"album","it is just an album");

INSERT INTO great_bay (name, price,category,comments)
VALUES ("dish", 25 ,"blues","a normal dish");

INSERT INTO great_bay (name, price,category,comments)
VALUES ("Introduction to MySQL", 30 ,"book","an intro book to sql");


SELECT * FROM great_bay;