const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

//Number of encryptions
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
//Key for hashing
const APP_SECRET_KEY = process.env.APP_SECRET_KEY

const hashPassword = async (password) => {
  //Gets password from req.body
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  //Hashes password and encrypts via Salt
  return hashedPassword
}

const comparePassword = async (storePassword, password) => {
  //Takes user given password and compares to current passwords for auth
  let passwordMatch = await bcrypt.compare(password, storePassword)
  //Returns true if password matches & returns false if it doesn't match
  return passwordMatch
}

const createToken = (payload) => {
  //Takes the payload and generates a token based on APP_SECRET_KEY
  let token = jwt.sign(payload, APP_SECRET_KEY)
  //return token when it encrypted
  return token
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  //Gets the toke
  try {
    let payload = jwt.verify(token, APP_SECRET_KEY)
    //Verifies the token
    if (payload) {
      res.locals.payload = payload
      //Passes token to next function if legit
      return next()
    }
    res.status(401).send({ status: "ERROR", msg: "UNAUTHORIZED!" })
  } catch (e) {
    console.error(e)
    res.status(401).send({
      status: "ERROR",
      msg: "UNABLE TO VERIFY TOKEN!",
    })
  }
}

const stripToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1]
    //Takes token from req.headers
    //Splits the value of the auth header
    if (token) {
      res.locals.token = token
      //If the token exists we add it to lifecycle state
      return next()
    }
    res.status(401).send({ status: "ERROR", msg: "UNAUTHORIZED!" })
  } catch (e) {
    console.error(e)
    res.status(401).send({ status: "ERROR", msg: "STRIP TOKEN ERROR!" })
  }
}

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword,
}
