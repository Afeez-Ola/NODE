// jshint esversion:6
const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write('Hello World!')
    fs.readFile('index.html', (err, data) => {
        if (err)
            throw err;
        console.log('operation success!');
    })
    res.end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server currently live on PORT:${PORT}`)
})