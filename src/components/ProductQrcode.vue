<template>
	<div class="products-qrocode">
		<product-component :products="products" class="products"></product-component>
		<qrcode-group-component class="qrcodes"></qrcode-group-component>
	</div>
</template>
<style>
	.products-qrocode {
    position: relative; 
    display: flex;
    justify-content: space-between;
    height: 26vh;
    padding: 0 calc(50% - 480px);
  }
  .products {
    width: 360px;
    min-width: 360px;
    left: 10px;
  }
  .qrcodes {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 260px;
    right: 0;
  }
</style>
<script>
  import Product from './Product'
  import QrcodeGroup from './QrcodeGroup'
  export default {
    name: 'ProductQrcode',
    components: {
      'product-component': Product,
      'qrcode-group-component': QrcodeGroup
    },
    props: ['products']
  }
</script>
