<template>
  <form @submit="addStudent">
    <input
      :v-model="text"
      placeholder="First "
      :value="this.firstName"
      name="firstName"
      @input="handleChange"
    />
    <input
      :v-model="text"
      placeholder="Last "
      :value="this.lastName"
      name="lastName"
      @input="handleChange"
    />
    <input
      :v-model="text"
      placeholder="Email "
      :value="email"
      name="email"
      @input="handleChange"
    />
    <input
      :v-model="text"
      placeholder="Course"
      :value="courses"
      name="course"
      @input="handleChange"
    />
    <input
      :v-model="text"
      placeholder="Grade"
      :value="grade"
      name="grade"
      @input="handleChange"
    />
  </form>
  <button type="submit" @click="addStudent">Add</button>
</template>
<script>
import axios from 'axios'
export default {
  name: 'StudentForm',
  data: () => ({
    newStudent: {
      firstName: '',
      lastName: '',
      email: '',
      course: '',
      grade: ''
    },
    student: ''
  }),
  methods: {
    async addStudent(event) {
      event.preventDefault()
      const response = await axios.post(
        'http://localhost:3001/api/students/create',
        this.newStudent
      )
      this.student = response
      console.log(this.student)
    },
    handleChange() {
      this.newStudent[event.target.name] = event.target.value
      console.log(this.newStudent)
    }
  }
}
</script>
