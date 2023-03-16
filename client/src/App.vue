<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <!-- <HomePage /> -->
    <main>
      <router-view header="all"></router-view>
    </main>
  </div>
</template>

<script>
// import HomePage from "./components/HomePage.vue";
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
#app {
}
</style>
