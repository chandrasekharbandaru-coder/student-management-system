
const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({
  name: String,
  email: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

const Lecturer= mongoose.model("Lecturer", lecturerSchema);
module.exports = Lecturer