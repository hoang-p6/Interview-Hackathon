const Router = require("express").Router()
const StudentRouter = require("./StudentRouter")
const CourseRouter = require("./CourseRouter")
const UserRouter = require("./UserRouter")

Router.use("/courses", CourseRouter)
Router.use("/students", StudentRouter)
Router.use("/users", UserRouter)

module.exports = Router
