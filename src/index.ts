import express from "express"
import cors from 'cors';
import path from "path";

import {  CreatePageData, ReadOriginallyPagesData, ReadUserPagesData } from "./mysql/page_mysql";
import { CreateContentData, DeleteContentData, ReadContensData, UpdateContentData } from "./mysql/content_mysql";
import { ReadSubPagesData } from "./mysql/sub_page_mysql";
import { ReadUserData } from "./mysql/user_mysql";

  const app = express()
  const port = process.env.PORT || 3001

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../frontend-react/*')));
  app.use(cors())

  // ↓↓↓　user
  app.get('/read_user', (req, res) => {
    ReadUserData(res, req)
  })

  // ↓↓↓　page
  app.get('/read_originally_pages', (req, res) => {
    ReadOriginallyPagesData(res, req)
  })

  app.post('/create_page', (req, res) => {
    CreatePageData(req, res)
  })

  app.get('/read_user_pages', (req, res) => {
    ReadUserPagesData(res, req)
  })

// ↓↓↓　subpage
  app.get('/read_subPages', (req, res) => {
    ReadSubPagesData(res, req)
  })

// ↓↓↓　content
  app.get('/create_content', (req, res) => {
    CreateContentData()
  })

  app.get('/read_contents', (req, res) => {
    ReadContensData(res, req)
  })

  app.get('/update_content', (req, res) => {
    UpdateContentData('')
  })

  app.get('/delete_content', (req, res) => {
    DeleteContentData('')
  })

  app.listen(port, () => {
    console.log(`listening on *:${port}`);
  }) 

