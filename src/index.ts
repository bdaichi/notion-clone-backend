import  express  from "express"
import * as mysql from "mysql2";
import { RowDataPacket } from "mysql2";
import path from "path";
 
const app = express()
const port = process.env.PORT || 3001
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend-react/*')));

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'comic'
  });

app.get('/', (req: express.Request, res: express.Response) => {
  connection.connect()
  connection.query(
    'SELECT * FROM `list`',
    function(err, results: RowDataPacket, fields) {
      if(err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.json({message: results[0].title});
    }
  );
  });

app.get("/api", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.status(201)
  res.json({ message: "Hello World!" });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend-react/pages/index.tsx'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})