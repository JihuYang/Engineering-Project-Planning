const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const port = 3010;
const dir = './server/json'

app.use(cors());
app.use('/api',api);
app.use('/api/upload',api);
app.use(express.json());

// app.post('/api/upload',(res)=>{
//   const files = fs.readdirSync("./server/json");
//   //res.send(files);
//   for (const file of files) {
//     console.log("file in files: " + file);
//   }

// });

app.listen(port,()=>console.log(`Listening on port ${port}`));

