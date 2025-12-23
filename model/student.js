
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }]
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student