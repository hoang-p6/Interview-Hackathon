const { IndividualCourse } = require("../../models")

const findAll = async (req, res) => {
  try {
    const all = await IndividualCourse.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

const assignStudentToCourse = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body
    const individualCourse = await IndividualCourse.create({
      studentId: +studentId,
      courseId: +courseId,
      grade: +grade
    })
    res.send(individualCourse)
  } catch (err) {
    throw err
  }
}

const findAllCoursesByStudentId = async (req, res) => {
  try {
    const studentId = +req.params.id
    const courses = await IndividualCourse.findAll({
      where: { studentId: studentId },
    })
    res.send(courses)
  } catch (err) {
    throw err
  }
}

const editIndividualCourseGrade = async (req, res) => {
  try {
    const { studentId, courseId } = req.body
    const updatedIndividualCourse = await IndividualCourse.update(req.body, {
      where: { studentId: +studentId, courseId: +courseId },
      returning: true,
    })
    res.send(updatedIndividualCourse)
  } catch (err) {
    throw err
  }
}

module.exports = {
  findAll,
  assignStudentToCourse,
  findAllCoursesByStudentId,
  editIndividualCourseGrade,
}