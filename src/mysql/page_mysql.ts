import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreatePageData(req: any, res: any) {
  // pageのデータを受け取って、valuesの中にぶちこむ
  console.log(req.body.page);

  const page = req.body.page;

  connection.connect();
  connection.query(
    `INSERT INTO pages (pageId, pageName, userId) VALUES('${page.pageId}', '${page.pageName}', '${page.userId}');`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createpage", err);
      } else {
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
}

export async function CreateOriginallyPage(res: any, req: any) {
  const userId = req.body.userId;
  connection.connect();
  connection.query(
    `INSERT INTO pages (pageId, pageName, userId) VALUES('todoList', 'todoリスト', 'daichi@icloud.com');`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createpage", err);
      } else {
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
  connection.query(
    `INSERT INTO pages (pageId, pageName, userId) VALUES('quickMemo'', 'クイックメモ', 'daichi@icloud.com');`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createpage", err);
      } else {
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
  connection.query(
    `INSERT INTO pages (pageId, pageName, userId) VALUES('tryUsing', '使ってみよう', '${userId}');`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createpage", err);
      } else {
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
}

export async function ReadOriginallyPagesData(req: any, res: any) {
  const userId = req.body.userId;
  connection.connect();
  connection.query(
    `SELECT * FROM pages WHERE pageId in ('quickMemo', 'tryUsing', 'todoList') AND userId='daichi@icloud.com'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(201);
      res.json({ pages: results });
    }
  );
}

export async function ReadUserPagesData(req: any, res: any) {
  const userId = req.body.userId;
  connection.connect();
  connection.query(
    `SELECT * FROM pages WHERE pageId not in ('quickMemo', 'tryUsing', 'todoList') AND userId='daichi@icloud.com'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(201);
      res.json({ pages: results });
    }
  );
}

export async function UpdatePageData(req: any, res: any, pageId: string) {
  connection.connect();
  connection.query(
    "UPDATE pages SET pageId='変更した' WHERE pageId='quickMemo'",
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("Updatepage", err);
      } else {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.status(201);
      }
    }
  );
}

export async function DeletePageData(pageId: string) {
  connection.connect();
  connection.query(
    "DELETE FROM pages WHERE pageId='pageId'",
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("deletepage", err);
      } else {
        console.log(results);
      }
    }
  );
}
