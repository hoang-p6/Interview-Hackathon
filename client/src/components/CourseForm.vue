<template>
  <form @submit="addCourse">
    <input :v-model="text" placeholder="Course Name " />
    <input :v-model="text" placeholder="Grade " />
  </form>
  <button type="submit">Add Course</button>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CourseForm',
  data: () => {},
  methods: {
    async addCourse() {
      await axios.post()
    }
  }
}
</script>
