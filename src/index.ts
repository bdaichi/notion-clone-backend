import  express  from "express"
import * as mysql from "mysql";
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
  });

  connection.connect()
    connection.query('select 1 as one', (err, results, fields) => {
      if (err) throw err;
  
      for (const result of results) {
          console.log(result.one);
      }
  });
  
  connection.end();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('tsこんにち')
})

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