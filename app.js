
const express = require('express');
const app = express();
const port = 8080;

app.listen(port,async()=> {
    console.log(`The server is running under port ${port}`)
});

app.get('/',(req,res)=>{
    res.send('This is sample EC2 example');
  })