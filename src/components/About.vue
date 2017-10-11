<template>
  <div class="about">
    <h1 class="animated fadeInUp">DOUBAN_DEMO</h1>
    <h2 class="animated flipInX">MINGJING</h2>
    <h2 class="animated flipInX">豆瓣</h2>
    <p class="animated flipInX">这是一个基于vue.js+webpack+vue-router+font-awesome做的一款单页应用app.</p>
    <a href="https://github.com/MjingGithub" target="_blank">
      <i class="fa fa-github-square"></i>
    </a>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.about {
  text-align: center;
}
.about h1 {
  margin-top: 8rem;
}
.about h2 {
  margin: 0.5rem 0;
}
.about i {
  font-size: 4rem;
  color: #1ABC9C;
  margin-top: 2rem;
}
</style>
