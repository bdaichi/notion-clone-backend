import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreateUserData() {
    //userのデータを受け取って、valuesの中にぶちこむ
    connection.connect()
    connection.query(
        "INSERT INTO users (userId, signInPassword) VALUES('','')",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('createuser', err)
            } else {
                console.log(results)
                connection.end()
            }
        }
    )
}

export async function ReadUserData(res: any, req: any){
    connection.connect()
    connection.query(
        "SELECT * FROM users WHERE userId='daichi@gmail.com' AND signInPassword='daichi2002'",
        function(err, results: RowDataPacket, fields) {
        if(err) {
            console.log("接続終了(異常)");
            throw err;
        }
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201)
        res.json({ user: results });
        }
    );
   
}

export async function DeleteUserData(userId: string) {
    connection.connect()
    connection.query("DELETE FROM users WHERE userId='userId'",
        function(err, results: RowDataPacket, fields) {
            if(err) {
                console.log('deleteuser', err)
            } else {
                console.log(results)
                connection.end()
                }
        }
    )
}