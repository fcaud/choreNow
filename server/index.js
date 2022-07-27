const express = require('express');
const app = new express();
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Express is running on Port ${port}`);
});
