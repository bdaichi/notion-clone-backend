import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function ReadOriginallyPagesData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM pages WHERE pageId in ('quickMemo', 'taskManagement', 'tryUsing')",
        function(err, results: RowDataPacket, fields) {
        if(err) {
            console.log("接続終了(異常)");
            throw err;
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201)
        res.json({ pages: results });
        }
    );
   
}

export async function ReadUserPagesData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM pages WHERE userId='daichi'",
        function(err, results: RowDataPacket, fields) {
        if(err) {
            console.log("接続終了(異常)");
            throw err;
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201)
        res.json({ pages: results });
        }
    );
   
}

export async function ReadPageData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM pages WHERE pageId='todoList'",
        function(err, results: RowDataPacket, fields) {
        if(err) {
            console.log("接続終了(異常)");
            throw err;
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201)
        res.json({ pages: results });
        }
    );
   
}