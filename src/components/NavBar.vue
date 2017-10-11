<template>
  <div class="navbar">
    <router-link to="/book">图书搜索</router-link>
     <router-link to="/helloWorld">HELLO</router-link>
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Navbar',
  data () {
    return {
      selected:'movie'
    }
  }
}
</script>

<style scoped>
  .navbar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width:100%;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
  }
  .navbar a {
    display: inline-block;
    padding: 1rem 0;
    text-decoration: none;
    color: #fff;
    width: 50%;
    background: rgb(52, 73, 94);
    text-align: center;
    letter-spacing: 3px;
    border-right: 1px solid #fff;
  }
  .navbar a:last-child {
    border-right: none;
  }
  .navbar a.router-link-active {
    background-color: #21486f;
    color: #fff;
  }

</style>
