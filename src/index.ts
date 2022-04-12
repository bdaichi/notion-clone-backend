import express from "express"
import axios from "axios";
import path from "path";

import createUserData from "./mysql/user_mysql/create_user_data";
import readUserData from "./mysql/user_mysql/read_user_data";
 
const app = express()
const port = process.env.PORT || 3001
const axiosBase =  axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  },
  responseType: 'json'  
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../frontend-react/*')));

app.get('/read_api', (req, res) => {
  readUserData(res, req)
});

 app.get('/create_api', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.status(201)
  
    axiosBase.get('http://localhost:3000')
      .then(function (response) {
        console.log('fetch_front_data', response)
      })
    .catch(function (error) {
      // handle error
      console.log(error);
  })
  // createUserData(req, res, 'daichihogehoge@icloud.com', 'mame')
})

app.listen(port, () => {
  console.log(`listening on *:${port}`);
}) 

