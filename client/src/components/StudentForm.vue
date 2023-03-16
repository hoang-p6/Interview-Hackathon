<template>
  <form @submit="addStudent">
    <input :v-model="text" placeholder="First " />
    <input :v-model="text" placeholder="Last " />
    <input :v-model="text" placeholder="Email " />
    <input :v-model="text" placeholder="Courses" />
    <input :v-model="text" placeholder="Grade" />
  </form>
  <button type="submit">Add</button>
</template>
<script>
import axios from "axios";
export default {
  name: "StudentForm",
  data: () => {},
  methods: {
    async addStudent() {
      await axios.post();
    },
  },
};
</script>
