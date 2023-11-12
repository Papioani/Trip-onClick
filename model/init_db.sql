--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists ManiVisits;
SET foreign_key_checks = 1;
 
--
-- Create Tables
--

CREATE DATABASE ManiVisits(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) not null,
    link VARCHAR(200) not null,
    PRIMARY KEY (id)
    );

--
-- 
--

INSERT INTO ManiVisits (name, link)
VALUES ('Gerolimenas', "https://www.cosmote.gr/hub/");
       
