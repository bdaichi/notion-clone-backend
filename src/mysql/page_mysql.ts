import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreatePageData() {
    //pageのデータを受け取って、valuesの中にぶちこむ
    connection.connect()
    connection.query(
        "INSERT INTO pages (pageId, pageName, text, userId) VALUES('','','')",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('createpage', err)
            } else {
                console.log(results)
                connection.end()
            }
        }
    )
}

export async function ReadOriginallyPagesData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM pages WHERE pageId in ('quickMemo', 'taskManagement', 'tryUsing'), userId='daichi'",
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

export async function UpdatePageData(pageId: string) {
    connection.connect()
    connection.query("UPDATE pages SET pageId='変更した' WHERE pageId='pageId'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('Updatepage', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}

export async function DeletePageData(pageId: string) {
    connection.connect()
    connection.query("DELETE FROM pages WHERE pageId='pageId'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('deletepage', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}
   
