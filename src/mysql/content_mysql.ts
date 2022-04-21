import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreateContentData(req: any, res: any) {
  const content = req.body.content;
  console.log(req.body.content);
  connection.connect();
  connection.query(
    `INSERT INTO contents (contentId, hostPageId, text, contentType, isCheck) VALUES('${content.contentId}','${content.hostPageId}','${content.text}','${content.contentType}',${content.isCheck})`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createContent", err);
      } else {
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
}

export async function ReadContentData(req: any, res: any) {
  const contentId = req.body.contentId;
  connection.connect();
  connection.query(
    `SELECT * FROM contents WHERE contentId='${contentId}'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(201);
      res.json({ content: results });
    }
  );
}

export async function ReadContentsData(req: any, res: any) {
  const pageId = req.body.pageId;
  connection.connect();
  connection.query(
    `SELECT * FROM contents WHERE hostPageId='${pageId}'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(201);
      res.json({ contents: results });
    }
  );
}

export async function UpdateContentData(req: any, res: any) {
  const content = req.body.content;
  const contentId = req.body.contentId;
  console.log("text", content.text);
  connection.connect();
  connection.query(
    `UPDATE contents SET text='${content.text}' WHERE contentId='${contentId}'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("UpdateContent", err);
      } else {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.status(201);
        console.log(results);
      }
    }
  );
}

export async function DeleteContentData(req: any, res: any) {
  const contentId = req.body.contentId;
  connection.connect();
  connection.query(
    `DELETE FROM contents WHERE contentId='${contentId}'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("deleteContent", err);
      } else {
        console.log(results);
      }
    }
  );
}
