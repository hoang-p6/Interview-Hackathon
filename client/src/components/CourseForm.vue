<template>
  <h1>Add A Course</h1>
  <div class="background">
    <div class="courseAdd">
      <form @submit="addCourse" class="course-form-input">
        <input
          class="course-form-name"
          @input="handleChange"
          placeholder="Course Name "
          :value="newCourse.name"
          name="name"
        />
        <input
          class="course-form-code"
          @input="handleChange"
          placeholder="Course Code "
          :value="newCourse.code"
          name="code"
        />
      </form>
      <button @click="addCourse" type="submit" class="courseAddButton">
        Add Course
      </button>
    </div>
  </div>
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
<style>
.courseAdd {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.course-form-input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.courseAddButton {
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

.course-form-name,
.course-form-code {
  margin: 3rem auto auto auto;
  border: 0;
  background-color: #002855;
  border-bottom: 1px solid #eee;
  font-size: x-large;
}
</style>
