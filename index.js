const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes")
const verify = require('./routes/verify')

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api",taskRoutes);
app.use('/',verify)


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connect successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT || 3030, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});