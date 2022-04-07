import  express  from "express"
import * as mysql from "mysql";
import path from "path";
 
const app = express()
const port = process.env.PORT || 3001
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend-react/*')));
// const connection = async () => {
//   return await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'',
//   });
// };

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('tsこんにちは')
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