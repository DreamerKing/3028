<template>
  <div id="app">
    <img src="./assets/imgs/logo.png">
    <navigator-component></navigator-component> 
    <router-view></router-view>
    <footer-component></footer-component>  
  </div>
</template>

<script>
import Footer from './components/Footer'
import Navigator from './components/Navigator'
export default {
  name: 'app',
  components: {
    'footer-component': Footer,
    'navigator-component': Navigator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
