import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreateSubPageData() {
    //subPageのデータを受け取って、valuesの中にぶちこむ
    connection.connect()
    connection.query(
        "INSERT INTO subPages (hostPageId, pageId, pageName) VALUES('','','')",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('createsubPage', err)
            } else {
                console.log(results)
                connection.end()
            }
        }
    )
}

export async function ReadSubPagesData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM subPages WHERE hostPageId='quickMemo'",
        function(err, results: RowDataPacket, fields) {
        if(err) {
            console.log("接続終了(異常)");
            throw err;
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201)
        res.json({ subPages: results });
        }
    );
   
}

export async function UpdateSubPageData(PageId: string) {
    connection.connect()
    connection.query("UPDATE subPages SET  WHERE PageId='PageId'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('UpdatesubPage', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}

export async function DeleteSubPageData(PageId: string) {
    connection.connect()
    connection.query("DELETE FROM subPages WHERE subPageId='pageId'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('deletesubPage', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}