// jshint esversion:6
const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "application/pdf" });
    // res.write('Hello World!')

    fs.readFile('MOFA SCHOLARSHIP SIGNED.pdf', (err, data) => {
        if (err)
            throw err;

        res.end(data)
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server currently live on PORT:${PORT}`);
})