CREATE TABLE users (
    user_id int(9) AUTO_INCREMENT PRIMARY KEY,
    firstName varchar(30),
    lastName varchar(30),
    email varchar(50),
    password varchar(14),
    role varchar(14),
    status varchar(18)
)