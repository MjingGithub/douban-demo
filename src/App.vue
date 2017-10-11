<template>
  <div id="app">
  <!--   <img src="./assets/logo.png"> -->
    <router-view/>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components:{ Navbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
