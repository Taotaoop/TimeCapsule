# 数据库准备
1. 下载mysql server
2. 使用数据库 express_mysql_db,使用 soource /路径/express_mysql_db.sql
3. 使用 cmd（管理员）
`
net start mysql
`
# 启动express
1. npm run start





# 项目结构

├── app.js
├── bin
│   └── www
+├── common #项目公用文件，sql配置文件以及一些公用方法。
+│   ├── config.js #数据库配置文件
+│   ├── sql.js #连接数据库
+│   └── utils.js #公用方法
+├── controllers #控制层，连接数据模型与路由层
+│   ├── user.js #用户相关控制层
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes # 路由
│   ├── index.js 
│   └── users.js #用户相关路由
└── views #ejs模板
    ├── error.ejs
    +├── fail.ejs #请求失败的模板
    +├── success.ejs #请求成功的模板
    ├── index.ejs
    └── layout.ejs
