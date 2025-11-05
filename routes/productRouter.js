import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey i am product roootes");
});

export default router;
