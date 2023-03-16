const { User } = require("../models")

const findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    throw err
  }
}

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).send(user)
  } catch (error) {
    res.status(401).send(error)
  }
}

module.exports = {
  findAllUsers,
  createUser,
}
