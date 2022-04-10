import  express  from "express"
import path from "path";
import createUserData from "./mysql/user_mysql/create_user_data";
import readUserData from "./mysql/user_mysql/read_user_data";
 
const app = express()
const port = process.env.PORT || 3001
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend-react/*')));


app.get('/read_api', (req, res) => {
  readUserData(res, req)
});

app.get('/create_api', (req, res) => {
  createUserData(req, res, 'daichihogehoge@icloud.com', 'mame')
})

app.get("/", (req, res) => {
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