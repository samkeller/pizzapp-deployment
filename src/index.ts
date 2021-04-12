import express from "express";
import "./env";
import { router } from "./api";

const app = express();

app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 8000;
app.listen(process.env.PORT, ()=> {
console.log(`Server is running on port ${PORT}.`);
});
