import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreateContentData() {
    //contentのデータを受け取って、valuesの中にぶちこむ
    connection.connect()
    connection.query(
        "INSERT INTO contents (contentId, hostPageId, text, contentType, isCheck) VALUES('','','','','')",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('createContent', err)
            } else {
                console.log(results)
                connection.end()
            }
        }
    )
}

export async function ReadContensData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM contents WHERE hostPageId='bfb08fc7-4c18-4876-9889-39156a89a323'",
        function(err, results: RowDataPacket, fields) {
        if(err) {
            console.log("接続終了(異常)");
            throw err;
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201)
        res.json({ contents: results });
        }
    );
   
}

export async function UpdateContentData(contentId: string) {
    connection.connect()
    connection.query("UPDATE contents SET contentId='変更した', text='sabpagecontent' WHERE contentId='jdfafafda'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('UpdateContent', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}

export async function DeleteContentData(contentId: string) {
    connection.connect()
    connection.query("DELETE FROM contents WHERE contentId='jdfafafdd'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('deleteContent', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}