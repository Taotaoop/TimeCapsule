# ���������ݿ�
DROP DATABASE IF EXISTS express_mysql_db;
CREATE DATABASE express_mysql_db;

USE express_mysql_db;

# ���� user ��
CREATE TABLE `user` (
    `name` VARCHAR(20) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`email`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

#�����ļ�
CREATE TABLE `file` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(20) NOT NULL,
    `filetype` VARCHAR(60) NOT NULL,
    `filepath` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# ������������������
INSERT INTO user (`name`, `email`) VALUES ('user1', 'xxx.outlook.com');
INSERT INTO user (`name`, `email`) VALUES ('user2', 'xy.outlook.com');
INSERT INTO file (`email`, `filetype`) VALUES ('user2', 'xy.outlook.com');

