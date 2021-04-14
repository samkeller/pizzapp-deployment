import express from "express";
import "./env";
import { router } from "./api";
const path = require('path');

const app = express();

app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 8000;

// Nécessaire pour servir le front
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath)); //__dir and not _dir
app.use('/css',express.static(path.join(publicPath) + '/css'));
app.use('/img',express.static(path.join(publicPath) + '/img'));


router.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
})

export default app