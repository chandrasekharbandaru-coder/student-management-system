const Lecture = require("../model/lecture");
const Student = require("../model/student");

const createLecture =  async (req, res) => {
  const lecture = await Lecture.create(req.body);
  res.status(201).json(lecture);
}
const getAllLecture = async (req, res) => {
  const { search } = req.query;

  const filter = search
    ? { topic: new RegExp(search, "i") }
    : {};

  const lectures = await Lecture.find(filter)
    .populate("course students");

  res.json(lectures);
}
const getLectureById =   async (req, res) => {
  const lecture = await Lecture.findById(req.params.id)
    .populate("course students");

  res.json(lecture);
}

const updateLecture =  async (req, res) => {
  const lecture = await Lecture.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(lecture);
}

const deleteLecture =  async (req, res) => {
  await Lecture.findByIdAndDelete(req.params.id);
  res.json({ message: "Lecture deleted" });
}

const addStudents = async (req, res) => {
  const { studentIds } = req.body;

  const lecture = await Lecture.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { students: { $each: studentIds } } },
    { new: true }
  );

  await Student.updateMany(
    { _id: { $in: studentIds } },
    { $addToSet: { lectures: lecture._id } }
  );

  res.json(lecture);
}

const removeStudent = async (req, res) => {
  await Lecture.findByIdAndUpdate(req.params.lectureId, {
    $pull: { students: req.params.studentId }
  });

  await Student.findByIdAndUpdate(req.params.studentId, {
    $pull: { lectures: req.params.lectureId }
  });

  res.json({ message: "Student removed from lecture" });
}
module.exports ={
    createLecture,
    getAllLecture,
    getLectureById,
    updateLecture,
    deleteLecture,
    addStudents,
    removeStudent
}