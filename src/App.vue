<template>
  <div id="app">
    <img src="./assets/imgs/logo.png">
    <navigator-component></navigator-component>
    <!-- <show-component></show-component>   -->
    <router-view></router-view>
    <product-qrcode-component></product-qrcode-component>
    <footer-component></footer-component>  
  </div>
</template>

<script>
import Navigator from './components/Navigator'
import Show from './components/Show'
import ProductQrcode from './components/ProductQrcode'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'navigator-component': Navigator,
    'show-component': Show,
    'product-qrcode-component': ProductQrcode,
    'footer-component': Footer
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
