//#�������ݿ�
const mysql = require('mysql');   //�������µ�npm�����������ڴ�֮ǰ��ִ��npm install mysql or yarn add mysql

const configObj = require('./config')

const db = mysql.createConnection({
  ...configObj
})

db.connect((err) => {
  if (err) {
    console.log('DatabaseConncetionFall:' + err.message);
    return;
  };
  console.log("DatabaseConncetionSucess");
})
global.db = db; //ʹ��nodeȫ�ֱ�������appjs�������app�����򶼿ɷ��ʣ����ڲ������ݿ�