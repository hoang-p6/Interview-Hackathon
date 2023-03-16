const Router = require("express").Router()
const StudentRouter = require("./StudentRouter")
const CourseRouter = require("./CourseRouter")
const UserRouter = require("./UserRouter")
const IndividualCourse = require("./IndividualCourse")

Router.use("/courses", CourseRouter)
Router.use("/students", StudentRouter)
Router.use("/users", UserRouter)
Router.use("/individuals", IndividualCourse)

module.exports = Router
