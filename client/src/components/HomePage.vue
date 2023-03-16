<template>
  <div>
    <h1>Welcome!</h1>
    <div>
      <button @click="$router.push('/courses')">Courses</button>
      <button @click="$router.push('/students')">Students</button>
      <button @click="$router.push('/students/form')">Add Student</button>
      <button @click="$router.push('/courses/form')">Add Course</button>
    </div>
    <!-- <StudentCard /> -->
  </div>
</template>
<script>
// import axios from "axios";
// import StudentCard from "./StudentCard.vue";
export default {
  name: "HomePage",
  components: {},
};
</script>
