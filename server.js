import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("this is / port");
});

app.listen(port, () => {
  console.log(`server is listening on port  ${port} `);
});
