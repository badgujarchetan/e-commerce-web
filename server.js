import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import ownerRouter from "./routes/ownerRouter.js";

import connectDB from "./config/mongoose-connection.js";
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/owner", ownerRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Connected successfully to server!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(` Server is listening on port ${port}`);
});
