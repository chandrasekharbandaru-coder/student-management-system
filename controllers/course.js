
const Course = require("../model/course");
const Student = require("../model/student");

const createCourse =  async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
}

const getAllCourses = async (req, res) => {
  const { search } = req.query;

  const filter = search
    ? { title: new RegExp(search, "i") }
    : {};

  const courses = await Course.find(filter)
    .populate("lecturer students");

  res.json(courses);
}

const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id)
    .populate("lecturer students");

  res.json(course);
}

const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(course);
}
const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
}

const addMultipleStudents = async (req, res) => {
  const { studentIds } = req.body;

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { students: { $each: studentIds } } },
    { new: true }
  );

  await Student.updateMany(
    { _id: { $in: studentIds } },
    { $addToSet: { courses: course._id } }
  );

  res.json(course);
}
const deleteMultipleStudents = async (req, res) => {
  await Course.findByIdAndUpdate(req.params.courseId, {
    $pull: { students: req.params.studentId }
  });

  await Student.findByIdAndUpdate(req.params.studentId, {
    $pull: { courses: req.params.courseId }
  });

  res.json({ message: "Student removed from course" });
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    addMultipleStudents,
    deleteMultipleStudents
}