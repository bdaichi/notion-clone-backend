import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

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