import  express  from "express"
import * as mysql from "mysql";

const app = express()
const port = process.env.PORT || 3001

const connection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
  });
};

app.get('/', (req: express.Request, res: express.Response) => {
  try{
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM MOVIE");
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows)
    })
  } catch(e){
    console.log('error', e)
  }
})

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})