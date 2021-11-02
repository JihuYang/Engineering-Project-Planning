const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const port = 3010;
const dir = './server/json'

app.use(cors());
app.use('/api', api);
app.use('/api/upload', api);
app.use('/api/file', api);
app.use(express.json());
const filelist = fs.readdirSync("./server/json");

app.post('/api/file', (req, res) => {
    console.log("server req body: " + req.body.fileIndex);
    console.log("server req file: " + filelist[req.body.fileIndex]);
    res.send(fs.readFileSync('./server/json/' + filelist[req.body.fileIndex], 'utf-8'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

