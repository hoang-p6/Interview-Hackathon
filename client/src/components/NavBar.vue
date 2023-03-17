<template>
  <nav class="navBar">
    <router-link to="/" class="homeNav"
      ><span class="material-symbols-outlined"> diversity_4 </span></router-link
    >
    <div class="otherNav">
      <router-link to="/courses" class="coursesNav">Courses</router-link>
      <router-link to="/students" class="studentsNav">Students</router-link>
      <router-link to="/about" class="aboutNav">About</router-link>
    </div>
  </nav>
</template>
<script>
// import StudentForm from './StudentForm.vue'
export default {
  name: 'NavBar',
  components: {}
}
</script>

<style scoped>
.navBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.otherNav {
  margin: 1rem;
}

.homeNav {
  margin: 1rem;
}
.material-symbols-outlined {
  font-size: 60px !important;
}
.coursesNav {
  margin: 1rem;
}
.studentsNav {
  margin: 1rem;
}
.homeNav:hover,
.studentsNav:hover,
.coursesNav:hover,
.aboutNav:hover {
  text-decoration: overline;
  transition: text-decoration-overline 5s;
  transform: scale(1.2);
}
</style>
