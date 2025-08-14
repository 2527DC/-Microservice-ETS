import express from "express";
import { createClient } from "./controllers/clientController.js";

const app = express();
app.use(express.json());

app.post('/message',createClient);


app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
}   );