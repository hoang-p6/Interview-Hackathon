<template>
  <div>
    <div v-if="selectedStudent">
      <h3>Student</h3>
      <div>Name: {{ this.student.firstName }} {{ this.student.lastName }}</div>

      <div>Email: {{ this.student.email }}</div>
      <div>Student Id: {{ this.student.id }}</div>
      <h3>Courses</h3>
      <div>
        {{ this.courses.name }}
        {{ this.courses.id }}
        {{ this.courses.code }}
      </div>
      <button @click="getAllCourses">Assign Courses</button>
      <div v-if="assignCourse">
        <div v-for="course in this.courses" :key="course.id">
          <div @click="getCourseById(course.id)">
            {{ course.name }}
          </div>
          <form v-if="formOn">
            <input
              :v-model="text"
              placeholder="Student Grade"
              :value="this.grade"
              name="grade"
              @input="handleChange"
            />
          </form>
          <div>
            <button @click="assignStudentToCourse(course.id)">Assign</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else v-for="student in students" :key="student.id">
      <div @click="getStudentById(student.id)">
        {{ student.firstName }}
        {{ student.lastName }}
      </div>
    </div>
  </div>
  <button @click="$router.push('/students/form')">Add Student</button>
</template>
<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line
  name: 'StudentCard',
  data: () => ({
    students: [],
    student: '',
    courses: '',
    assignCourse: false,
    allStudents: false,
    selectedStudent: false,
    courseAssignment: {
      courseId: '',
      studentId: '',
      grade: ''
    },
    courseById: '',
    formOn: false
  }),
  mounted() {
    this.getAllStudents()
  },
  methods: {
    async getAllStudents() {
      this.allStudents = true
      this.selectedStudent = false
      const response = await axios.get(`http://localhost:3001/api/students/`)
      this.students = response.data
      console.log(this.students)
    },
    async getStudentById(studentId) {
      this.allStudents = false
      this.selectedStudent = true
      const response = await axios.get(
        `http://localhost:3001/api/students/${studentId}`
      )
      this.student = response.data
      this.courses = response.data.courses[0]
      console.log(this.courses)
    },
    async getAllCourses() {
      this.assignCourse = true
      const response = await axios.get(`http://localhost:3001/api/courses/`)
      this.courses = response.data
      console.log(this.courses)
    },
    handleChange() {
      this.courseAssignment[event.target.name] = event.target.value
      console.log(this.courseAssignment.grade)
    },
    async getCourseById(courseId) {
      this.formOn = true
      const response = await axios.get(
        `http://localhost:3001/api/courses/${courseId}`
      )
      this.courseById = response.data
      console.log(response.data)
    },
    async assignStudentToCourse(courseId) {
      this.courseAssignment.courseId = courseId
      this.courseAssignment.studentId = this.student.id
      console.log(this.courseAssignment)
      const response = await axios.post(
        `http://localhost:3001/api/individuals/assign`,
        this.courseAssignment
      )
      console.log(response)
    }
  }
}
</script>
