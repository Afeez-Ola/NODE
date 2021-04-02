// jshint esversion:6
const fs = require('fs');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.writeHead(200, { "content-Type": 'application/json' });



});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port:${PORT}`);
});