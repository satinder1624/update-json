const express = require('express');
const route = express.Router();
const controller = require("./controller");
const fs = require('fs');

route.get("/", (req,res)=>{
  res.statusCode = 200;
  res.end('Hello World');
});

route.get("/new", (req,res)=>{
  res.statusCode = 200;
  res.end('Hello World 23');
});

route.post("/newData/:id", (req,res)=>{
  res.statusCode = 200;
  const id = req.params.id;
  let newEntryObject = {
    id:id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  let readData = fs.readFileSync('../db.json');
  let OldObject= JSON.parse(readData);
  OldObject.push(newEntryObject);

  let combine = JSON.stringify(OldObject);
  fs.writeFile('../db.json', combine, err => {
    // error checking
    if(err) throw err;
    
    console.log("New data added");
});   
});

// route.post("newData/:id", controller.create);

module.exports = route;