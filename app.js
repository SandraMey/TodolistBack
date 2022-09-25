const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require('./routes/Todo');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
  

app.use(cors());
app.use(express.json());

app.use('/api/', todoRouter);

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
