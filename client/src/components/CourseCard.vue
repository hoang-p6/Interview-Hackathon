<template>
  <div>
    <h1>Courses</h1>
    <div v-if="selectedCourse">
      {{ this.course.name }}
      {{ this.course.code }}
    </div>
    <div
      v-else
      v-for="course in courses"
      :key="course.id"
      @click="getCourseById(course.id)"
    >
      <div>{{ course.name }}</div>
      <div>{{ course.code }}</div>
    </div>
  </div>
  <button @click="$router.push('/courses/form')">Add Course</button>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  data: () => ({
    courses: '',
    course: '',
    allCourses: false,
    selectedCourse: false
  }),
  components: {},
  mounted() {
    this.getAllCourses()
  },
  methods: {
    async getAllCourses() {
      this.allCourses = true
      this.selectedCourse = false
      const response = await axios.get(`http://localhost:3001/api/courses/`)
      this.courses = response.data

      console.log(this.courses)
    },
    async getCourseById(courseId) {
      this.allCourses = false
      this.selectedCourse = true
      const response = await axios.get(
        `http://localhost:3001/api/courses/${courseId}`
      )
      this.course = response.data
      console.log(response.data)
    }
  }
}
</script>
