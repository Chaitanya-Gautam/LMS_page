const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const { prototype } = require('events');
const app = express();


//connect to mongoDb
const dbconn ='mongodb+srv://Chaitanya_gautam:121345Aa@project.cgbe2.mongodb.net/Project?retryWrites=true&w=majority'
mongoose.connect(dbconn,{ useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> app.listen(3000))
.catch((err) => console.log(err));


app.use(express.json());
app.use(express.static("express"));
// default URL for website

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });

  
// const server = http.createServer(app);
// const port = 3000;
// server.listen(port);
// console.debug('Server listening on port ' + port);