import { connection } from "../mysql";
import { RowDataPacket } from "mysql2";

export default function readPagesData(res: any, req: any){
    connection.connect()
    connection.query(
        'SELECT * FROM pages',
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