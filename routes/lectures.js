const express = require("express");
const Lecture = require("../model/lecture");
const Student = require("../model/student");
const { getAllLecture, createLecture, getLectureById, updateLecture, deleteLecture, addStudents, removeStudent } = require("../controllers/lecture");
const router = express.Router();

/* CREATE */
router.post("/",createLecture);

/* READ ALL + SEARCH */
router.get("/", getAllLecture);

/* READ ONE */
router.get("/:id",getLectureById);

/* UPDATE */
router.put("/:id",updateLecture);

/* DELETE */
router.delete("/:id",deleteLecture);

/* ADD MULTIPLE STUDENTS */
router.post("/:id/students",addStudents );

/* REMOVE STUDENT */
router.delete("/:lectureId/students/:studentId",removeStudent );

module.exports = router;
