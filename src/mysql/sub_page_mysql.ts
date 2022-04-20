import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreateSubPageData(req: any, res: any) {
  const subPage = req.body.subPage;
  connection.connect();
  connection.query(
    `INSERT INTO subPages (hostPageId, pageId, pageName) VALUES('${subPage.hostPageId}','${subPage.pageId}','${subPage.pageName}')`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createsubPage", err);
      } else {
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
}

export async function ReadSubPagesData(req: any, res: any) {
  const pageId = req.body.pageId;
  connection.connect();
  connection.query(
    `SELECT * FROM subPages WHERE hostPageId='${pageId}'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(201);
      res.json({ subPages: results });
    }
  );
}
export async function UpdateSubPageData(req: any, res: any) {
  connection.connect();
  connection.query(
    "UPDATE subPages SET  WHERE PageId='PageId'",
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("UpdatesubPage", err);
      } else {
        console.log(results);
      }
    }
  );
}

export async function DeleteSubPageData(req: any, res: any) {
  connection.connect();
  connection.query(
    "DELETE FROM subPages WHERE subPageId='pageId'",
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("deletesubPage", err);
      } else {
        console.log(results);
        connection.end();
      }
    }
  );
}
