<template>
  <div>
    <h1>Welcome!</h1>
    <div>
      <button @click="$router.push('/courses')">Courses</button>
      <button @click="$router.push('/students')">Students</button>
      <button @click="$router.push('/students/form')">Add Student</button>
      <button @click="$router.push('/courses/form')">Add Course</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  components: {}
}
</script>
<style></style>
