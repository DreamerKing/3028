<template>
	<div>
		<product-component></product-component>
		<qrcode-group-component></qrcode-group-component>
	</div>
</template>
<style>
	
</style>
<script>
  import Product from './Product'
  import QrcodeGroup from './QrcodeGroup'
  export default {
    name: 'ProductQrcode',
    components: {
      'product-component': Product,
      'qrcode-group-component': QrcodeGroup
    }
  }
</script>
