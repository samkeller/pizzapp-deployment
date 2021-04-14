import express from "express";
import "./env";
import { router } from "./api";
import app from './app'
const path = require('path');

const PORT = process.env.PORT || 8000;

// Front REACT
app.use(express.static(path.join(__dirname, 'build')))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
