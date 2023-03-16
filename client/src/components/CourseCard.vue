<template>
  <div>
    <h1>Current Courses</h1>
    <div>
      <h3>Advance Course Placeholder</h3>
      <p>ACP 111</p>
    </div>
  </div>
  <button @click="$router.push('/courses/form')">Add Course</button>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'HomePage',
  data: () => {
    // courses:''
  },
  components: {},
  methods: {
    // async getAllCourses() {
    //   const response = await axios.get(`http://localhost:3000/courses/`)
    //   this.courses = response
    // },
    // async getCourseById() {
    //   const response = await axios.get(`http://localhost:3000/courses/`)
    // }
  }
}
</script>
