import express from "express"
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";

import createUserData from "./mysql/user_mysql/create_user_data";
import readUserData from "./mysql/user_mysql/read_user_data";
import readPagesData from "./mysql/page_mysql/read_all_page_data";
 
const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../frontend-react/*')));

app.get('/read_api', (req, res) => {
  readUserData(res, req)
});

app.get('/read_pages', (req, res) => {
  readPagesData(res, req)
})

app.post('/post_api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.status(201)
  console.log('fetch_front_data', req.body.patams)
  res.json({
    msg: "success",
});
})

app.listen(port, () => {
  console.log(`listening on *:${port}`);
}) 

