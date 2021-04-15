import express from "express";
import { router } from "./api";
import path from "path"

const app = express();

app.use(express.json());
app.use(router);

// Front REACT
app.use(express.static(path.join(__dirname, "..", "react-app", 'build')))


export default app