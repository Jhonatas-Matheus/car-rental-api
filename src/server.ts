import express from "express";

import { createCourse } from "./routes";
const app = express();

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello, World!" });
// });
app.get("/", createCourse);
app.listen(2580);
