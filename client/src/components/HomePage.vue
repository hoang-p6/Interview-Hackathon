<template>
  <h1>Welcome!</h1>
  <div class="background">
    <div class="getStarted">
      <h2>Get Started</h2>
      <div class="buttonsDiv">
        <button @click="$router.push('/courses')" class="homeButtons">
          Courses
        </button>
        <button @click="$router.push('/students')" class="homeButtons">
          Students
        </button>
        <button @click="$router.push('/students/form')" class="homeButtons">
          Add Student
        </button>
        <button @click="$router.push('/courses/form')" class="homeButtons">
          Add Course
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  components: {}
}
</script>
<style>
h1 {
  color: #979dac;
  text-align: center;
}
h2 {
  color: #979dac;
  text-align: center;
}
.getStarted {
  display: flex;
  flex-direction: column;
}
.buttonsDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.background {
  background-color: #002855;
  border: 2px solid #979dac;
  height: 100vh;
  border-radius: 30px;
}
.homeButtons {
  background-color: #0466c8;
  color: aliceblue;
  width: 20%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: 2px solid #979dac;
  font-size: 1em;
  margin: 2px;
}
.homeButtons:hover {
  background-color: rgb(3, 83, 164);
}
</style>
