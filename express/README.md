# ���ݿ�׼��
1. ����mysql server
2. ʹ�����ݿ� express_mysql_db,ʹ�� soource /·��/express_mysql_db.sql
3. ʹ�� cmd������Ա��
`
net start mysql
`
# ����express
1. npm run start





# ��Ŀ�ṹ

������ app.js
������ bin
��   ������ www
+������ common #��Ŀ�����ļ���sql�����ļ��Լ�һЩ���÷�����
+��   ������ config.js #���ݿ������ļ�
+��   ������ sql.js #�������ݿ�
+��   ������ utils.js #���÷���
+������ controllers #���Ʋ㣬��������ģ����·�ɲ�
+��   ������ user.js #�û���ؿ��Ʋ�
������ package.json
������ public
��   ������ images
��   ������ javascripts
��   ������ stylesheets
��       ������ style.css
������ routes # ·��
��   ������ index.js 
��   ������ users.js #�û����·��
������ views #ejsģ��
    ������ error.ejs
    +������ fail.ejs #����ʧ�ܵ�ģ��
    +������ success.ejs #����ɹ���ģ��
    ������ index.ejs
    ������ layout.ejs
