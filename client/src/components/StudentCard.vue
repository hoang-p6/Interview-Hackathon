<template>
  <div>
    <div v-if="selectedStudent">
      {{ this.student.firstName }}
      {{ this.student.lastName }}
      {{ this.student.email }}
      {{ this.student.id }}
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
    allStudents: false,
    selectedStudent: false
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
      console.log(response.data)
    }
  }
}
</script>
