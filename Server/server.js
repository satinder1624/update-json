const express = require('express');
const request = require('request');
const cors = require('cors');
const routes = require("./routes.js");

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
// middleware
app.use(express.json());
// const upload = require("../whatsapp-backend/middleware/upload");
app.use(cors());

app.use("/", routes);

app.listen(port, function() {
  console.log('Server running at http://'+ 'localhost' + ':' + port + '/');
});

