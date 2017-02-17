<template>
	<div class="qrcode-group" v-for="qrcode in qrcodes">
		<qrcode-component></qrcode-component>
	</div>
</template>
<script>
  import Qrcode from './Qrcode'
  export default {
    name: 'QrcodeGroup',
    data: {
      qrcodes: [
        {
          name: '淘宝二维码',
          qrSrc: '../assets/imgs/qr-taobao.png'
        },
        {
          name: '微信二维码',
          qrSrc: '../assets/imgs/qr-weixin.png'
        }
      ]
    },
    components: {
      'qrcode-componet': Qrcode
    }
}
</script>
