const { Router } = require("express");
const studentController = require("../controllers/students.controller");

const router = Router();

router.post("/students", studentController.postStudent);
router.delete("/students/:id", studentController.deleteStudent);
router.get("/students", studentController.getStudents);
router.patch("/students/:id", studentController.patchStudent);

module.exports = router;
