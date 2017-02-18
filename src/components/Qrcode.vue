<template>
	<div>
		<img :src="qrcode.qrSrc"/>
		<span>{{qrcode.name}}</span>
	</div>
</template>
<style></style>
<script>
  export default {
    name: 'Qrcode',
    props: ['qrcode']
  }
</script>
