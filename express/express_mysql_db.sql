# ���������ݿ�
DROP DATABASE IF EXISTS express_mysql_db;
CREATE DATABASE express_mysql_db;

USE express_mysql_db;

# ���� user ��
CREATE TABLE `user` (
    `name` VARCHAR(60) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`email`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `file` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20),
    `time` date NOT NULL,
    `email` VARCHAR(60),
    `capsuleText` VARCHAR(2000),
    `filepath` VARCHAR(2000),
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# ������������������
INSERT INTO user (`name`, `email`) VALUES ('user1', 'xxx.outlook.com');
INSERT INTO file (`id`,`name`,`time`, `email`,`capsuleText`, `filepath`) VALUES ('0','user2','1989-11-11', 'xy.outlook.com','��΢����΢��','./file/��Ļ��ͼ 2023-12-26 121607-1704167982482.png');
INSERT INTO file (`id`,`name`,`time`, `email`,`capsuleText`, `filepath`) VALUES ('0','user2','1999-11-11', 'xy.outlook.com','��΢����΢��','./file/��Ļ��ͼ 2023-12-26 121607-1704167982482.png');

