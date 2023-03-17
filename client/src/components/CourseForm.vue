<template>
  <form @submit="addCourse">
    <input
      @input="handleChange"
      placeholder="Course Name "
      :value="newCourse.name"
      name="name"
    />
    <input
      @input="handleChange"
      placeholder="Course Code "
      :value="newCourse.code"
      name="code"
    />
  </form>
  <button @click="addCourse" type="submit">Add Course</button>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CourseForm',
  data: () => ({
    newCourse: {
      name: '',
      code: ''
    },
    course: ''
  }),
  methods: {
    async addCourse() {
      const response = await axios.post(
        'http://localhost:3001/api/courses/create',
        this.newCourse
      )
      this.course = response
      console.log(this.course)
    },
    handleChange(event) {
      console.log(event)
      this.newCourse[event.target.name] = event.target.value
      console.log(this.newCourse)
    }
  }
}
</script>
