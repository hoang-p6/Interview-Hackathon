const { Course, Student } = require('../models')

const findAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [
        {
          model: Course,
          as: 'courses',
          through: { attributes: ['grade'] }
        }
      ]
    })
    res.send(students)
  } catch (err) {
    throw err
  }
}

const findStudentById = async (req, res) => {
  try {
    const studentId = +req.params.id
    const student = await Student.findByPk(studentId, {
      include: [
        {
          model: Course,
          as: 'courses',
          through: { attributes: ['grade'] }
        }
      ]
    })
    res.send(student)
  } catch (err) {
    throw err
  }
}

const createStudent = async (req, res) => {
  console.log(req.body)
  if (
    req.body.firstName.length !== undefined &&
    req.body.lastName !== undefined &&
    req.body.email !== undefined
  ) {
  }
  try {
    const { firstName: firstName, lastName: lastName, email } = req.body
    const student = await Student.create({
      firstName,
      lastName,
      email
    })
    return res.status(200).send({
      msg: `Student was created`,
      payload: student
    })
  } catch (err) {
    throw err
  }
}

module.exports = {
  findAllStudents,
  findStudentById,
  createStudent
}
