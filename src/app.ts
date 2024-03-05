import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/connect";
//For env File
dotenv.config();
connectDB();
console.log(process.env.PORT);

const app: Application = express();
const port = process.env.PORT || 8008;

app.get("/", (req: Request, res: Response) => {
  res.send("working get");
});
// listen
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
