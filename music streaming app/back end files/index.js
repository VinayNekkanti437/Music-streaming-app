const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Music-Player')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Error in connecting to MongoDB");
  });

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the backend demo');
});

app.listen(7000, () => {
  console.log("Server is listening on port 7000");
});