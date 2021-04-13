import express from "express";
import "./env";
import { router } from "./api";
const path = require('path');

const app = express();

app.use(express.json());
app.use(router);
const PORT = process.env.PORT || 8000;

// Front REACT
app.use('/public',express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'tsx')
var options = { beautify: true };
app.engine('tsx', require('express-react-views').createEngine(options))



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get('/', (req, res) => res.render('index'));