const Student = require("../model/student");

const createStudents = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
}

const getAllStudents =  async (req, res) => {
  const { search } = req.query;

  const filter = search
    ? {
        $or: [
          { name: new RegExp(search, "i") },
          { email: new RegExp(search, "i") }
        ]
      }
    : {};

  const students = await Student.find(filter)
    .populate("courses lectures");

  res.json(students);
}

const getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id)
    .populate("courses lectures");

  if (!student) return res.status(404).json({ message: "Not found" });
  res.json(student);
}

const updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(student);
}

const deleteStudent =  async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
}
module.exports = {
    createStudents,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}