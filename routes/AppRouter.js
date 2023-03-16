const Router = require("express").Router()
const StudentRouter = require("./StudentRouter")
const CourseRouter = require("./CourseRouter")
const UserRouter = require("./UserRouter")
const IndividualCourseRouter = require("./IndividualCourse")
const AuthRouter = require("./AuthRouter")

Router.use("/courses", CourseRouter)
Router.use("/students", StudentRouter)
Router.use("/users", UserRouter)
Router.use("/individuals", IndividualCourseRouter)
Router.use("/auth", AuthRouter)

module.exports = Router
