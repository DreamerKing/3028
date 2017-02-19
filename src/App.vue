<template>
  <div id="app">
    <img class="logo" src="./assets/imgs/logo.png">
    <navigator-component></navigator-component>
    <router-view class="container"></router-view>
    <product-qrcode-component :products="products"></product-qrcode-component>
    <footer-component></footer-component>  
  </div>
</template>

<script>
import Data from 'data/products.json'
import Navigator from './components/Navigator'
import ProductQrcode from './components/ProductQrcode'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'navigator-component': Navigator,
    'product-qrcode-component': ProductQrcode,
    'footer-component': Footer
  },
  data: function () {
    return {
      products: Data.products
    }
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  font-family: '幼圆', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app img.logo {
    max-width: 16vh;
    display: block;
    margin: 10px auto;
    text-align: center;
}
.container {
  max-height: 50vh;
  height: 48vh;
  background-color: #f8f7f8;
  padding: 20px calc(50% - 480px);
}
.scrollable { -webkit-overflow-scrolling: touch }
::-webkit-scrollbar { width: 7px; height: 7px }
::-webkit-scrollbar-thumb { background-color: rgba(50, 50, 50, .3) }
::-webkit-scrollbar-thumb:hover { background-color: rgba(50, 50, 50, .6) }
::-webkit-scrollbar-track { background-color: rgba(50, 50, 50, .1) }
::-webkit-scrollbar-track:hover { background-color: rgba(50, 50, 50, .2) }
</style>
