
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lecturer: { type: mongoose.Schema.Types.ObjectId, ref: "Lecturer" },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course