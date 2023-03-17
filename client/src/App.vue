<template>
  <div id="app">
    <header class="header">
      <NavBar />
    </header>
    <main>
      <router-view header="all"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap%27');
html {
  background-color: #001233;
  font-family: 'Source Sans Pro', sans-serif;
}
.header {
  font-size: 40px;
}
a {
  text-decoration: none;
  color: #979dac;
}
button {
  background-color: #4f6d7a;
  color: #a3b18a;
}
</style>
