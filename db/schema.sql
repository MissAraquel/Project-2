--  Schema for User Profile (1st db)

Create DATABASE userProfile_db;
USE userProfile_db;

CREATE TABLE users
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    fisrt_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(250) NOT NULL,
    password VARCHAR(150) NOT NULL,
    location VARCHAR(150) NOT NULL,
    preference_time INTEGER (2),
    preference_money INTEGER (2) 
    PRIMARY KEY (id)
);
SHOW TABLES;


--  Schema for History (2nd db)
CREATE TABLE history
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    users_id INTEGER NOT NULL,
    time_stamp TIMESTAMP NOT NULL,
    categroy VARCHAR(150) NOT NULL,
    org_name VARCHAR(150) NOT NULL,
    org_link VARCHAR(250),
    
    PRIMARY KEY (id),

    INDEX (users_id),
    FOREIGN KEY (users_id)
    REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
);
        
SHOW TABLES;