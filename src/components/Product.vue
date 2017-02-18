<template>
	<div>
		<h2>产品介绍</h2>
		<div class="product">
			<a v-for="product in products" :href="product.link" target="_blank">{{product.name}}</a>
		</div>
	</div>
</template>
<style></style>
<script>
  export default {
    name: 'Product',
    props: ['products'],
    beforeCreate: function () {
      console.log('DK', 'products')
    }
  }
</script>
