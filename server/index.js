const express = require('express');
const app = new express();
require('dotenv').config();
const cors = require('cors');
const router = require('./router');
const { dbInit } = require('./models/db.index');

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);

dbInit().then(() => {
  app.listen(port, () => {
    console.log(`Express is running on Port ${port}`);
  });
});
