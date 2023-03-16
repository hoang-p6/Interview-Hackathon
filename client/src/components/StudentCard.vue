<template>
  <div v-for="student in students" :key="student">
    <div>Students Name</div>
    <div>Email</div>
    <div>Id</div>
    <div>Courses</div>
    <div>Grade</div>
  </div>
  <router-view></router-view>
  <router-link to="/addstudent">Add Student</router-link>
</template>
<script>
// import axios from 'axios'
export default {
  // eslint-disable-next-line
  name: 'Student',
  data: () => ({
    students: []
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
