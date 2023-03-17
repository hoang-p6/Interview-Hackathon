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
html {
  background-color: #dad7cd;
}
.header {
  background-color: #344e41;
  font-size: 55px;
}
a {
  text-decoration: none;
  color: #a3b18a;
}
button {
  background-color: #588157;
  color: #a3b18a;
}
</style>
