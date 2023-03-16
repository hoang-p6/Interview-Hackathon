<template>
  <div>
    <div v-if="selectedStudent"></div>

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
    allStudents: false,
    selectedStudent: false
  }),
  mounted() {
    this.getAllStudents
  },
  methods: {
    async getAllStudents() {
      this.allStudents = true
      this.selectedStudent = false
      const response = await axios.get(`http://localhost:3001/api/students/`)
      this.student = response
      console.log(response)
    },
    async getStudentById(studentId) {
      this.allStudents = false
      this.selectedStudent = true
      const response = await axios.get(
        `http://localhost:3001/api/students/${studentId}`
      )
      console.log(response)
    }
  }
}
</script>
