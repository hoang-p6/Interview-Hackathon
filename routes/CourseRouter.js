const Router = require("express").Router()
const controller = require("../controllers/CourseController")

Router.get("/", controller.findAllCourses)
Router.get("/:id", controller.findCourseById)
Router.post("/create", controller.createCourse)

module.exports = Router
