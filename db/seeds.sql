-- Select burgers_db
USE `burgers_db`;

-- inserting 3 burgers
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Beef', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Turkey', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Chicken', false, CURRENT_TIMESTAMP);