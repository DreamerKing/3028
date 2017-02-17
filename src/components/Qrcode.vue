<template>
	<div>
		<img v-bind:src="qrSrc"/>
		<span>{{qrName}}</span>
	</div>
</template>
<style></style>
<script>
  export default {
    name: 'Qrcode',
    data: 'qrcode'
  }
</script>
