import * as mysql from "mysql2";

export  const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notion_app_develop'
});
  