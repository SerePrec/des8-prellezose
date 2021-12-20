SHOW DATABASES;
USE heroku_b601d9fca46901d;
DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(50) NOT NULL,
price FLOAT(8,2) UNSIGNED NOT NULL,
thumbnail VARCHAR(1024) );
DESC productos;
SELECT * FROM productos; 
-- SELECT @@auto_increment_increment;
-- SET @@auto_increment_increment=1;