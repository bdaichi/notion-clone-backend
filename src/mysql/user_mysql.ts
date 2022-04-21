import { connection } from "./mysql";
import { RowDataPacket } from "mysql2";

export async function CreateUserData(req: any, res: any) {
  const user = req.body.user;
  console.log("createUser", user.userId, user.signInPassword);
  connection.connect();
  connection.query(
    `INSERT INTO users (userId, signInPassword) VALUES('${user.userId}','${user.signInPassword}')`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("createuser", err);
      } else {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.status(201);
        res.json({ result: "http://localhost:3000" });
        console.log(results);
      }
    }
  );
}

export async function ReadUserData(req: any, res: any) {
  const userId = req.body.userId;
  const signInPassword = req.body.signInPassword;
  console.log(userId, signInPassword);
  connection.connect();
  connection.query(
    `SELECT * FROM users WHERE userId='${userId}' AND signInPassword='${signInPassword}'`,
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(201);
      console.log("readUser", results);
      res.json({ user: results });
    }
  );
}

export async function DeleteUserData(userId: string) {
  connection.connect();
  connection.query(
    "DELETE FROM users WHERE userId='userId'",
    function (err, results: RowDataPacket, fields) {
      if (err) {
        console.log("deleteuser", err);
      } else {
        console.log(results);
      }
    }
  );
}
