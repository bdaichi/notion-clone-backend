import { connection } from "../mysql";
import { RowDataPacket } from "mysql2";

export default function createUserData(res: any, req: any, userId: string, signInPassword: string){
    const Insert = `INSERT INTO users (userId, signInpassword) VALUES('${userId}', '${signInPassword}')`
    
    connection.connect()
    connection.query(Insert, function(err, results, fields){
        if(err) throw err;
        console.log(results)
    }
    );
    connection.end();
}