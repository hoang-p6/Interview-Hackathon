const Router = require("express").Router()
const controller = require("../controllers/UserController")
const middleware = require("../middleware")

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.findAllUsers
)

module.exports = Router
