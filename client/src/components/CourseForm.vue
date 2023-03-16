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
// import axios from "axios";
export default {
  name: "CourseForm",
  data: () => ({
    newCourse: {
      name: "",
      code: "",
    },
  }),
  methods: {
    async addCourse() {
      // await axios.post();
      console.log(this.newCourse);
    },
    handleChange(event) {
      console.log(event);
      this.newCourse[event.target.name] = event.target.value;
      console.log(this.newCourse);
    },
  },
};
</script>
