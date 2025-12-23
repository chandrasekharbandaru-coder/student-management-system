const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDBchandra")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/students", require("./routes/students"));
app.use("/lecturers", require("./routes/lecturers"));
app.use("/courses", require("./routes/courses"));
app.use("/lectures", require("./routes/lectures"));

app.listen(3000, () => console.log("Server running on port 3000"));
