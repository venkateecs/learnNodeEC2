
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 8080;

//app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.listen(port,async()=> {
    console.log(`The server is running under port ${port}`)
});

app.get('/',(req,res)=>{
    res.send({status:200, message:'Its sample get message'});
  })

  app.post('/user',(req,res)=>{      
    let obj =req.body;
    obj.status = 200;
    res.send(obj);
  })  