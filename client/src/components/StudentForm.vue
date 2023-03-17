<template>
  <h1>Add A New Student</h1>
  <div class="studentAdd">
    <form @submit="addStudent" class="studentForm">
      <input
        class="student-form-first"
        :v-model="text"
        placeholder="First Name"
        :value="this.firstName"
        name="firstName"
        @input="handleChange"
      />
      <input
        class="student-form-last"
        :v-model="text"
        placeholder="Last Name"
        :value="this.lastName"
        name="lastName"
        @input="handleChange"
      />
      <input
        class="student-form-email"
        :v-model="text"
        placeholder="Email "
        :value="email"
        name="email"
        @input="handleChange"
      />
      <!-- <input
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
    /> -->
    </form>
    <button type="submit" @click="addStudent" class="studentFormButton">
      Add
    </button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'StudentForm',
  data: () => ({
    newStudent: {
      firstName: '',
      lastName: '',
      email: ''
      // course: '',
      // grade: ''
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

<style>
.student-form-first,
.student-form-last,
.student-form-email {
  margin: 3rem auto auto auto;
  border: 0;
  background-color: #002855;
  border-bottom: 1px solid #eee;
  font-size: x-large;
}
.studentAdd {
  background-color: #002855;
  border: 2px solid #979dac;
  height: 100vh;
  border-radius: 30px;
}
.studentForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.studentFormButton {
  margin: 1rem auto;
  background-color: rgb(4, 102, 200);
  color: aliceblue;
  width: 10%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: 2px #979dac;
  font-size: 1em;
}
</style>
