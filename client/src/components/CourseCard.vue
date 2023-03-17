<template>
  <div class="main">
    <h1>Courses</h1>
    <!-- <div>
      {{ this.course.name }}
      {{ this.course.code }}
    </div> -->

    <div class="class-container" id="background">
      <div
        class="card"
        v-for="course in courses"
        :key="course.id"
        @click="$router.push(`/courses/${course.id}`)"
      >
        <h2>{{ course.name }}</h2>
        <h3>{{ course.code }}</h3>
      </div>
    </div>

    <div class="class-container">
      <button class="course-button" @click="selectedCourse = false">
        Back
      </button>
      <button class="course-button" @click="$router.push('/courses/form')">
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

.class-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 250px;
}

.card {
  font-family: 'Source Sans Pro', sans-serif;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(10, 36, 114);
  width: 20%;
  height: 250px;
  margin: 10px;
  border-radius: 15px;
  padding: 20px;
  font-size: 1.2em;
}
.card:hover {
  border-style: solid;
  /* background-color: rgba(10, 36, 114, 0.591); */
  color: rgb(3, 83, 164);
}

.course-button {
  background-color: rgb(4, 102, 200);
  color: aliceblue;
  width: 20%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: none;
  font-size: 1em;
}
.button:hover {
  background-color: rgb(3, 83, 164);
}
#background {
  background-color: #002855;
  border: 2px solid #979dac;
  height: 100vh;
  width: 98.2vw;
  border-radius: 30px;
}
</style>
