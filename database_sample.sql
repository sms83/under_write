<!-- create TABLE 
KB2793634
pwd sqlserver12
microsft visual studo sheel
-->

CREATE DATABASE employee
use employee
DROP TABLE users

SELECT * FROM users;

CREATE TABLE users(
empid int IDENTITY(1,1) PRIMARY KEY,
firstname varchar(50),
lastname varchar(50),
city varchar(50)
)

INSERT INTO users (firstname,lastname,city) VALUES ('Prakash','Raju','Salem');
INSERT INTo users (firstname,lastname,city) VALUES ('Satish','SM','Chennai');
INSERT INTo users (firstname,lastname,city) VALUES ('Hussain','Dastagir','Dubai');
INSERT INTo users (firstname,lastname,city) VALUES ('Krishna','Kumar','Cbe');
INSERT INTo users (firstname,lastname,city) VALUES ('Jaya','Prakash','Kochi');


