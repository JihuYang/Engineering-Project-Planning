var express = require('express');
var router = express.Router();
const axios = require('axios');
const { application } = require('express');
const fs = require("fs");
const filelist = fs.readdirSync("./server/json");

const fileTxt = fs.readFileSync('./server/json/style.txt','utf-8');
console.log(filelist);

router.get('/',function(req,res){
  res.send(req.body);
});

router.post('/upload',function(req,res){
  res.send(req.body);
});

router.get('/read',function(req,res){
  res.send(filelist);
});

router.get('/readTXT',function(req,res){
  res.send(fileTxt);
});

module.exports = router;