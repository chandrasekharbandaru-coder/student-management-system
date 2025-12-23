
const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  topic: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  date: Date,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
});
const Lecture = mongoose.model("Lecture", lectureSchema);
module.exports = Lecture