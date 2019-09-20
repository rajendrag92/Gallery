'use strict';

let express = require('express');
let app = express();
const fs = require('fs');

app.use(express.static('Client'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.get('/GetImageGallery/', function (req, res) {

    let pageSize = 10;
    //Read data 
    let data = JSON.parse(fs.readFileSync("Server/data/photos.json"));

    console.log(data.length);
    // Sort data
    data.sort();

    let endIndex = (parseInt(req.query.index) + 1) * pageSize;
    let startIndex = (endIndex - pageSize);

    let pageData = data.slice(startIndex, endIndex);

    res.send(pageData);
});

let server = app.listen(2200, function () {
    console.log('Running server on 2200 port.');
});

exports.stopServer = function () {
    server.close();
};