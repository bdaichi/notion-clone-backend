import express from "express";
import cors from "cors";
import path from "path";

import {
  CreateOriginallyPage,
  CreatePageData,
  DeletePageData,
  ReadOriginallyPagesData,
  ReadUserPagesData,
  UpdatePageData,
} from "./mysql/page_mysql";
import {
  CreateContentData,
  DeleteContentData,
  ReadContentData,
  ReadContentsData,
  UpdateContentData,
} from "./mysql/content_mysql";
import {
  CreateSubPageData,
  DeleteSubPageData,
  ReadSubPagesData,
  UpdateSubPageData,
} from "./mysql/sub_page_mysql";
import { CreateUserData, ReadUserData } from "./mysql/user_mysql";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../../frontend-react/*")));
app.use(cors());

// ↓↓↓　user
app.post("/create_user", (req, res) => {
  CreateUserData(req, res);
});

app.post("/read_user", (req, res) => {
  ReadUserData(req, res);
});

// ↓↓↓　page
app.post("/create_page", (req, res) => {
  CreatePageData(req, res);
});

app.post("/create_originally_page", (req, res) => {
  CreateOriginallyPage(req, res);
});

app.post("/read_originally_pages", (req, res) => {
  ReadOriginallyPagesData(req, res);
});

app.post("/read_user_pages", (req, res) => {
  ReadUserPagesData(req, res);
});

app.get("/update_page", (req, res) => {
  UpdatePageData(req, res);
});

app.post("/delete_page", (req, res) => {
  DeletePageData(req, res);
});

// ↓↓↓　subpage
app.post("/create_subPage", (req, res) => {
  CreateSubPageData(req, res);
});

app.post("/read_subPages", (req, res) => {
  ReadSubPagesData(req, res);
});

app.post("/update_subPage", (req, res) => {
  UpdateSubPageData(req, res);
});

app.post("/delete_subPage", (req, res) => {
  DeleteSubPageData(req, res);
});

// ↓↓↓　content
app.post("/create_content", (req, res) => {
  CreateContentData(req, res);
});

app.post("/read_content", (req, res) => {
  ReadContentData(req, res);
});

app.post("/read_contents", (req, res) => {
  ReadContentsData(req, res);
});

app.post("/update_content", (req, res) => {
  UpdateContentData(req, res);
});

app.post("/delete_content", (req, res) => {
  DeleteContentData(req, res);
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
