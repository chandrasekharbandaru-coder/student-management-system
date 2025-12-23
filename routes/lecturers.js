const express = require("express");
const { createLecturer, getAllLecturers, getLecturerById, updateLecturer, deleteLecturer } = require("../controllers/lecturer");

const router = express.Router();

/* CREATE */
router.post("/", createLecturer);

/* READ ALL + SEARCH */
router.get("/", getAllLecturers);

/* READ ONE */
router.get("/:id",getLecturerById);

/* UPDATE */
router.put("/:id",updateLecturer);

/* DELETE */
router.delete("/:id",deleteLecturer);

module.exports = router;
