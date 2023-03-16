const router = require("express").Router()
const controller = require("../controllers/IndividualCourseController")

router.get("/", controller.findAll)
router.get("/:id", controller.findAllCoursesByStudentId)
router.post("/assign", controller.assignStudentToCourse)
