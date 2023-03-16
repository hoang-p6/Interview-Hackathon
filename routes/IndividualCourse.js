const Router = require("express").Router()
const controller = require("../controllers/IndividualCourseController")

Router.get("/", controller.findAll)
Router.get("/:id", controller.findAllCoursesByStudentId)
Router.post("/assign", controller.assignStudentToCourse)

module.exports = Router