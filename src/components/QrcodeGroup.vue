<template>
	<div class="qrcode-group" >
		<qrcode-component v-for="qrcode in qrcodes" :qrcode="qrcode"></qrcode-component>
	</div>
</template>
<style>
  .qrcode-group {
    /*margin-top: 40px;*/
  }
</style>
<script>
  import Qrcode from './Qrcode'
  const qrcodes = [
    {
      name: '淘宝二维码',
      qrSrc: require('assets/imgs/qr-taobao.png')
    },
    {
      name: '微信二维码',
      qrSrc: require('assets/imgs/qr-weixin.png')
    }
  ]
  export default {
    name: 'QrcodeGroup',
    data: function () {
      return {
        qrcodes: qrcodes
      }
    },
    components: {
      'qrcode-component': Qrcode
    }
}
</script>
