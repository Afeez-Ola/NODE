// jshint esversion:6
const express = require('express');
const fs = require('fs')

const app = express();


// app.get('/', (req, res) => {
//     res.writeHead(200, { "content-Type": "audio/mp3" });

//     fs.exists('01 - Eraser.mp3', (exists) => {
//         if (exists) {
//             const rStream = fs.createReadStream('01 - Eraser.mp3');

//             rStream.pipe(res);
//         } else {
//             res.end('Error 404')
//         }
//     });
// });



app.get('/', (req, res) => {
    // READ A FILE
    // fs.readFile('index.html', (err, data) => {
    //     if (err)
    //         throw err;

    //     res.end(data);
    // });

    // WRITE A FILE
    // const content = 'Chelsea were fucked big time by West brom!';
    // fs.writeFile('index.html', content, (err) => {
    //     if (err)
    //         throw err;

    //     res.end(content)
    // })

    const new_content = ' And they will probably loose again on Tuesday or Thursday!';
    fs.appendFile('index.html', new_content, (err) => {
        if (err)
            throw err;

        res.end('Successfully Appended!')
    })
});




































const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port:${PORT}`);
});