<template>
	<figure class="qrcode">
		<img :src="qrcode.qrSrc"/>
		<figcaption class="qrcode-label">{{qrcode.name}}</figcaption>
	</figure>
</template>
<style>
	.qrcode {
		float: left;
		width: 84px;
		margin: 0;
		padding: 0;
	}
	figure.qrcode {
		padding-right: 24px; 
	}
	.qrcode-label {
		padding-top: 4px;
		color: red;
	}
</style>
<script>
  export default {
    name: 'Qrcode',
    props: ['qrcode']
  }
</script>
