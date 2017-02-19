<template>
	<div class="products">
		<h2>产品介绍</h2>
		<div class="product">
			<a class="link hvr-bounce-in" v-for="product in products" :href="product.link" target="_blank">{{product.name}}</a>
		</div>
	</div>
</template>
<style>
  .products {
    margin: 0;
    padding-left: 24px; 
  }
  .products h2 {
      margin-top: 6vh;
      display: block;
      color: red;
      font-weight: 500;
      font-size: 18px;
      text-align: left;
  }
  .product {
    display: block;
    margin-top: 1vh;
  }
  .product a.link{
       float: left;
       width: 64px;
       padding: 10px 20px 10px 0;
       text-decoration: none;
       color: #666;
  } 
  .hvr-bounce-in {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px transparent;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
  }
  .hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }

</style>
<script>
  export default {
    name: 'Product',
    props: ['products']
  }
</script>
