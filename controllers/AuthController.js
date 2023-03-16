const { User } = require("../models")
const middleware = require("../middleware")

const Register = async (req, res) => {
  try {
    //Pull user model fields
    const { name, email, password } = req.body
    //Hash user provided password
    let passwordDigest = await middleware.hashPassword(password)
    //Create user using pulled fields and hashed password
    const user = await User.create({ name, email, passwordDigest })
    //Return user
    res.send(user)
  } catch (e) {
    console.error(e)
    res.status(401).send({
      status: "ERROR",
      msg: "ERROR CREATING USER, PLEASE TRY AGAIN!",
    })
  }
}

const Login = async (req, res) => {
  try {
    //Find USER by unique email
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    })
    //Check if stored password and provided password match
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      req.body.password
    )
    //If match id True create payload for JWT token
    if (matched) {
      //Non-Sensitive info get put into payload
      let payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      }
      //Token is created and sent as a response with the payload
      let token = middleware.createToken(payload)
      return res.send({
        user: payload,
        token,
      })
    }
    res.status(401).send({ status: "ERROR", msg: "UNAUTHORIZED!" })
  } catch (e) {
    console.error(e)
    res.status(401).send({
      status: "ERROR",
      msg: "ERROR CREATING USER, PLEASE TRY AGAIN!",
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Register,
  Login,
  CheckSession,
}
