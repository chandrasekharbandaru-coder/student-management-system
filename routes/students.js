const express = require("express");
const { createStudents, getAllStudents, getStudentById, updateStudent, deleteStudent } = require("../controllers/student");

const router = express.Router();

/* CREATE */
router.post("/", createStudents);

/* READ ALL + SEARCH */
router.get("/",getAllStudents);

/* READ ONE */
router.get("/:id",getStudentById );

/* UPDATE */
router.put("/:id",updateStudent );

/* DELETE */
router.delete("/:id",deleteStudent);

module.exports = router;
