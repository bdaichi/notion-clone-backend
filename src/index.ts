import express from "express"
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";

import { ReadPageData, ReadOriginallyPagesData, ReadUserPagesData } from "./mysql/page_mysql";
import { ReadContensData } from "./mysql/content_mysql";
import { ReadSubPagesData } from "./mysql/sub_page_mysql";
 

  const app = express()
  const port = process.env.PORT || 3001

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../frontend-react/*')));

  app.get('/read_originally_pages', (req, res) => {
    ReadOriginallyPagesData(res, req)
  })

  app.get('/read_user_pages', (req, res) => {
    ReadUserPagesData(res, req)
  })

  app.get('/read_page', (req, res) => {
    ReadPageData(res, req)
  })

  app.get('/read_subPages', (req, res) => {
    ReadSubPagesData(res, req)
  })

  app.get('/read_contents', (req, res) => {
    ReadContensData(res, req)
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

