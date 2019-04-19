CREATE TABLE PROFILE(
    loginID int AUTO_INCREMENT PRIMARY KEY,
    password varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    DOB Date NOT NULL,
    address varchar(50),
    emailID varchar(50) NOT NULL,
    gender varchar(2),
    login_role varchar(10) NOT NULL
    )ENGINE=INNODB;
    
CREATE TABLE Trainer(
    loginID int AUTO_INCREMENT PRIMARY KEY,
    salary int not null,
    time_slots varchar(20),
    supervisorID int NOT NULL,
	FOREIGN KEY fk_profile(loginID)
	REFERENCES PROFILE (loginID)
    )ENGINE=INNODB;