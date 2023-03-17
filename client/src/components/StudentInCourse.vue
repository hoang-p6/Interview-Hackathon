<template>
  <div class="main">
    <h1>Students In Course</h1>
    <div
      class="card"
      v-for="student in students"
      :key="student.id"
      @click="$router.push('/students')"
    >
      <h3>{{ student.firstName }} {{ student.lastName }}</h3>
      <h3>Email:</h3>
      <h4>{{ student.email }}</h4>
      <h3>Grade:</h3>
      <h3>{{ student.courses[0].IndividualCourse.grade }}</h3>
    </div>
  </div>
  <!-- <button @click="$router.push('/courses/form')">Add Course</button> -->
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  data: () => ({
    students: []
  }),
  components: {},
  mounted() {
    this.courseId = this.$route.params.id
    this.getAllStudents(this.courseId)
  },
  methods: {
    async getAllStudents(courseId) {
      const response = await axios.get(`http://localhost:3001/api/students`)
      console.log(response.data)
      console.log(courseId)
      this.students = response.data.filter((student) => {
        return student.courses.some((course) => course.id == courseId)
      })
      console.log(this.students)
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
  border-style: none;
  font-size: 1em;
}
:hover.button {
  background-color: rgb(3, 83, 164);
}
</style>
