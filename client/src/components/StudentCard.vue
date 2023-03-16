<template>
  <h1>Students</h1>
  <div v-for="student in students" :key="student">
    <div>{{ student.name }}</div>
    <div>Email</div>
    <div>Id</div>
    <div>Courses</div>
    <div>Grade</div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  // eslint-disable-next-line
  name: 'StudentCard',
  data: () => ({
    students: [{ name: 'Doug' }, { name: 'Mat' }]
  }),
  methods: {
    // async getAllStudents() {
    //   const response = await axios.get()
    //   this.student = response
    // },
    // async getStudentById() {
    //   const response = await axios.get()
    // }
  }
}
</script>
