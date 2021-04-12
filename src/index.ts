import express from "express";
import "./env";
import { router } from "./api";

const app = express();

app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public')); //__dir and not _dir

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});

router.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

router.get("/salut", (req, res) => {
    res.status(200).send("salut");
})