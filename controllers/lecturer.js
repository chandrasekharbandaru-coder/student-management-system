const Lecturer = require("../model/lecturer");

const createLecturer = async (req, res) => {
  const lecturer = await Lecturer.create(req.body);
  res.status(201).json(lecturer);
}

const getAllLecturers = async (req, res) => {
  const { search } = req.query;

  const filter = search
    ? { name: new RegExp(search, "i") }
    : {};

  const lecturers = await Lecturer.find(filter).populate("courses");
  res.json(lecturers);
}
const getLecturerById =  async (req, res) => {
  const lecturer = await Lecturer.findById(req.params.id).populate("courses");
  res.json(lecturer);
}

const updateLecturer =  async (req, res) => {
  const lecturer = await Lecturer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(lecturer);
}

const deleteLecturer =  async (req, res) => {
  await Lecturer.findByIdAndDelete(req.params.id);
  res.json({ message: "Lecturer deleted" });
}


module.exports = {
    createLecturer,
    getAllLecturers,
    getLecturerById,
    updateLecturer,
    deleteLecturer
}