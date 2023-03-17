<template>
  <h1>Courses</h1>
  <div class="background">
    <div class="main">
      <!-- <div>
      {{ this.course.name }}
      {{ this.course.code }}
    </div> -->
      <div
        class="card"
        v-for="course in courses"
        :key="course.id"
        @click="$router.push(`/courses/${course.id}`)"
      >
        <h2>{{ course.name }}</h2>
        <h3>Course Code: {{ course.code }}</h3>
      </div>
      <button class="button" @click="selectedCourse = false">Back</button>
      <button class="button" @click="$router.push('/courses/form')">
        Add Course
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  data: () => ({
    courses: '',
    course: '',
    allCourses: false,
    selectedCourse: false,

    assignedCourse: {
      courseId: '',
      studentId: '',
      grade: ''
    }
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap%27');

.main {
  font-family: 'Source Sans Pro', sans-serif;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card {
  font-family: 'Source Sans Pro', sans-serif;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(10, 36, 114);
  width: 20%;
  height: 40%;
  margin-bottom: 10px;
  border-radius: 15px;
}
:hover.card {
  border-style: solid;
  /* background-color: rgba(10, 36, 114, 0.591); */
  color: rgb(3, 83, 164);
}

.button {
  background-color: rgb(4, 102, 200);
  color: aliceblue;
  width: 20%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: 2px #979dac;
  font-size: 1em;
}
:hover.button {
  background-color: rgb(3, 83, 164);
}
</style>
