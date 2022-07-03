const fs = require('fs');

// Create and save new record
exports.create = (req, res) => {
  res.end('Hello World 2');
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return null;
  }

  

  // New Record
  const id = req.params.id;
  let model = {
    id:id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
//   fs.readFile('../db.json', (err, data) => {
//     if (err) throw err;
//     let records = JSON.parse(data);
//     console.log(records);
//   }); 
  console.log("first")   
  
};