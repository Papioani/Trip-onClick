

DROP TABLE IF EXISTS users; 

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT, 
	username VARCHAR(255) NOT NULL, 
	password VARCHAR(255) NOT NULL, 
	PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Mani_hotel_favourites;

CREATE TABLE Mani_hotel_favourites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Hotel VARCHAR(255),
  Rating VARCHAR(255),
  Price VARCHAR(255)
);

DROP TABLE IF EXISTS Spain_hotel_favourites;

CREATE TABLE Spain_hotel_favourites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Hotel VARCHAR(255),
  Rating VARCHAR(255),
  Price VARCHAR(255)
);




DROP TABLE IF EXISTS places;

CREATE TABLE places(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) not null,
    link VARCHAR(500) not null,
    PRIMARY KEY (id)
    );


DROP TABLE if exists test;

CREATE TABLE test(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY);
--
-- 
--

INSERT INTO places (name, link)
VALUES ('Gerolimenas', "https://www.thetimes.co.uk/article/the-mani-the-most-beguiling-region-in-greece-cwv59jbpm"),(
       "Kardamyli", "https://travelgreecetraveleurope.com/2021/04/14/reasons-to-visit-kardamyli-in-west-mani/"),(
        "Limeni", "http://www.arttravel.gr/arttravel-best_travel-ideas/article/18263/limeni-petrino-limani"),(
            "Areopoli", "https://greecetravelideas.com/areopoli-greece/"),(
                "Cave Dyros", "https://www.diros-caves.gr/en/home/");
            

       
/* If you created tables and databases directly in MySQL Workbench, they are stored in the MySQL server and are not automatically reflected in your SQL file. The SQL file typically contains scripts that are used to initialize or update the database schema, 
but it may not include all the changes made directly within the MySQL environment. */

/* The SQL file serves as documentation for the database schema, providing insights into its structure, tables, relationships, and constraints. */

/* The SQL file contains scripts to initialize the database schema, including creating tables, defining relationships, and populating initial data. It's used during database setup, deployment to new environments, and database migrations */

/* Having the database schema defined in an SQL file ensures portability across different environments and systems. */