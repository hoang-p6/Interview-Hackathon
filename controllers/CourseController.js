const { Student, Course } = require('../models')

const findAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [
        {
          model: Student,
          as: "students",
          through: { attributes: ["grade"] },
        },
      ],
    })
    res.send(courses)
  } catch (err) {
    throw err
  }
}

const findCourseById = async (req, res) => {
  try {
    const courseId = +req.params.id
    const course = await Course.findByPk(courseId, {
      include: [
        {
          model: Student,
          as: "students",
          through: { attributes: ["grade"] },
        },
      ],
    })
    res.send(course)
  } catch (err) {
    throw err
  }
}

const createCourse = async (req, res) => {
  try {
    const { name, code } = req.body
    const course = await Course.create({
      name,
      code: code.toUpperCase(),
    })
    return res.status(200).send({
      msg: `Course was created`,
      payload: course,
    })
  } catch (err) {
    throw err
  }
}

module.exports = {
  findAllCourses,
  findCourseById,
  createCourse,
}