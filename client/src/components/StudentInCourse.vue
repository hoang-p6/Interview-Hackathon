<template>
  <div>
    <h1>Students In Course</h1>
    <div
      v-for="student in students"
      :key="student.id"
      @click="$router.push('/courses/grades')"
    >
      <div>{{ student.firstName }}</div>
      <div>{{ student.lastName }}</div>
      <div>{{ student.email }}</div>
      <div>{{ student.courses[0].IndividualCourse.grade }}</div>
    </div>
  </div>
  <!-- <button @click="$router.push('/courses/form')">Add Course</button> -->
</template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
  data: () => ({
    students: [],
  }),
  components: {},
  mounted() {
    this.courseId = this.$route.params.id;
    this.getAllStudents(this.courseId);
  },
  methods: {
    async getAllStudents(courseId) {
      const response = await axios.get(`http://localhost:3001/api/students`);
      console.log(response.data);
      console.log(courseId);
      this.students = response.data.filter((student) => {
        return student.courses.some((course) => course.id == courseId);
      });
      console.log(this.students);
    },
  },
};
</script>
