import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function ReadContensData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM contents WHERE hostPageId='bfb08fc7-4c18-4876-9889-39156a89a322'",
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