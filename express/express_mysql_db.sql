# 创建空数据库
DROP DATABASE IF EXISTS express_mysql_db;
CREATE DATABASE express_mysql_db;

USE express_mysql_db;

# 创建 user 表
CREATE TABLE `user` (
    `name` VARCHAR(60) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`email`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `file` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `capsuleText` VARCHAR(2000) NOT NULL,
    `filepath` VARCHAR(2000) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入三条测试用数据
INSERT INTO user (`name`, `email`) VALUES ('user1', 'xxx.outlook.com');
INSERT INTO file (`id`,`name`, `email`,`capsuleText`, `filepath`) VALUES ('0','user2', 'xy.outlook.com','轻微的轻微的','./file/屏幕截图 2023-12-26 121607-1704167982482.png');

