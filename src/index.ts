import  express  from "express"

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('tsだお')
})

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})