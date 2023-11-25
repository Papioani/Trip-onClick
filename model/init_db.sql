--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists places;
DROP TABLE if exists tests;
SET foreign_key_checks = 1;
 
--
-- Create Tables
--

CREATE TABLE places(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) not null,
    link VARCHAR(200) not null,
    PRIMARY KEY (id)
    );



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
            

       
