//  GENERAL
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// COMPONENTES
import Connection from "./database/db.js";
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

// DB CONNECT
Connection();
// PORT
const PORT = 8000;
// SERVER RUN
app.listen(PORT, () => {
  console.log(`Server is running || ${PORT}`);
});
