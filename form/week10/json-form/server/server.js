const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const port = 3002;
const dir = './server/json'

app.use(cors());
app.use('/api',api);
app.use('/api/upload',api);
app.use(express.json());

app.post('/api/upload',(req,res)=>{
  console.log(req.body);

  const data = JSON.stringify(req.body,null,4);
  const fileName = req.body.page_label;
  const files = fs.readdirSync("./server/json");
  for (const file of files) {
    console.log(file);
    res.send(file);
  }
  //res.send(files);
});


app.listen(port,()=>console.log(`Listening on port ${port}`));

