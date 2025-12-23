const express = require("express");
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse, addMultipleStudents, deleteMultipleStudents } = require("../controllers/course");
const router = express.Router();

/* CREATE */
router.post("/",createCourse);

/* READ ALL + SEARCH */
router.get("/",getAllCourses );

/* READ ONE */
router.get("/:id", getCourseById);

/* UPDATE */
router.put("/:id",updateCourse );

/* DELETE */
router.delete("/:id", deleteCourse);

/* ADD MULTIPLE STUDENTS */
router.post("/:id/students", addMultipleStudents);

/* REMOVE STUDENT */
router.delete("/:courseId/students/:studentId", deleteMultipleStudents);

module.exports = router;
