drop database if exists LyleIO;
create database LyleIO;
USE LyleIO;

drop table if exists Users;
CREATE TABLE Users (
	userName varchar(30) DEFAULT 'user',
	pass varchar(30) NOT NULL DEFAULT 'password',
	track varchar(20),
	email varchar(50) NOT NULL,
	userID int NOT NULL AUTO_INCREMENT,
    gradYear int,
    bio varchar(1000),
	firstName varchar(30),
	lastName varchar(30),
	PRIMARY KEY (userName)
);
Insert into Users (userName, pass, email) values ("admin", "password", "admin@lyle.io");
#Insert into users (userName, pass, track, email, firstName, lastName, gradYear, bio) values ("Test","testpass","CSE", "test@test.net", "Test", "User", 2018, "I am a test user and literally do not exist");
#Insert into users (userName, pass, track, email, firstName, lastName) values ("JSmith","JohnPass","Cyber Security", "JSmith@cyber.com", "John", "Smith", 2020, "This is my biography and it has words in it");
#Insert into users (userName, pass, track, email, firstName, lastName) values ("NSchweser","pw","Game Development", "Schweser@smu.edu", "Noah", "Schweser", 2019, "Smash bros lol");

drop table if exists Forums;
CREATE TABLE Forums (
	forumID int NOT NULL AUTO_INCREMENT,
	forumName varchar(20) NOT NULL DEFAULT 'newForum',
	PRIMARY KEY (forumID)
);
#Insert into Forums (forumName) values ("CSE (General)");
#Insert into Forums (forumName) values ("Cyber Security");
#Insert into Forums (forumName) values ("Game Development");
#Insert into Forums (forumName) values ("Pre Med");
#Insert into Forums (forumName) values ("Data Intensive");

drop table if exists Posts;
CREATE TABLE Posts (
	postID int NOT NULL AUTO_INCREMENT,
	userName varchar(30) NOT NULL DEFAULT 'user',
	title varchar(128) NOT NULL DEFAULT 'New Post',
	body varchar(1024) NOT NULL DEFAULT 'Body',
	forumID int NOT NULL,
	postdate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (postID),
	FOREIGN KEY(forumID) REFERENCES Forums(forumID) ON DELETE CASCADE,
	FOREIGN KEY (userName) REFERENCES Users(userName)
);
#Insert into Posts (userName, title, body, forumID, postdate) values ("Test", "Need help choosing a track","I dunno what track I want to be on and need advice on how to choose",1, '2018-01-01 00:00:00');
#Insert into Posts (userName, title, body, forumID, postdate) values ("JSmith", "Encryption","I need to figure out how to encrypt this data for homework",2,'2018-11-13 12:00:00');
#Insert into Posts (userName, title, body, forumID, postdate) values ("NSchweser", "Best game engine?","Unity or Unreal? Please help me decide I am very poor",3,'2017-12-31 23:56:32');
#Insert into Posts (userName, title, body, forumID, postdate) values ("NSchweser", "Come to Cyber Security Club!","It's gonna be great, I really think you'll enjoy it!",2,'2018-08-30 15:43:06');
#Insert into Posts (userName, title, body, forumID, postdate) values ("admin", "Come to Data Intensive Club!","It's gonna be great, I really think you'll enjoy it!",5, '2017-01-01 00:00:00');
#Insert into Posts (userName, title, body, forumID, postdate) values ("admin", "Come to Pre Med Club!","It's gonna be great, I really think you'll enjoy it!",4, '2010-01-01 00:00:00');
#Insert into Posts (userName, title, body, forumID, postdate) values ("admin", "Come to Pre Med Club!","It's gonna be great, I really think you'll enjoy it!",4, '2009-01-01 00:00:00');
#Insert into Posts (userName, title, body, forumID, postdate) values ("admin", "Come to Pre Med Club!","It's gonna be great, I really think you'll enjoy it!",4, '2008-01-01 00:00:00');

drop table if exists Messages;
CREATE TABLE Messages (
	msgID int NOT NULL AUTO_INCREMENT,
	userName varchar(30) NOT NULL DEFAULT 'user',
	postID int NOT NULL,
	body varchar(512) NOT NULL,
	postdate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (msgID),
	FOREIGN KEY(postID) REFERENCES Posts(postID) ON DELETE CASCADE,
	FOREIGN KEY (userName) REFERENCES Users(userName)
);
#Insert into Messages (userName, postID, body) values ("NSchweser", 1,"Try game development!");
#Insert into Messages (userName, postID, body) values ("JSmith", 4,"Sounds fun! What time is it?");
#Insert into Messages (userName, postID, body) values ("admin", 4,"It's at 6pm tomorrow in Caruth. Should be tons of fun!");
#Insert into Messages (userName, postID, body) values ("admin", 5,"It's at 6pm tomorrow in Caruth. Should be tons of fun!");