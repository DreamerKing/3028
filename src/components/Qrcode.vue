<template>
	<div>
		<img v-bind:src="qrSrc"/>
		<span>{{name}}</span>
	</div>
</template>
<style></style>
<script>
  export default {
    name: 'Qrcode',
    props: ['qrcode']
  }
</script>
