<template>
	<div class="contact">
		<dl class="detail">
			<dt>联系人</dt><dd>王维平先生(运营部主管)</dd>
			<dt>电话</dt><dd>18768466759</dd><dd>86 0571 87293302</dd>
			<dt>地址</dt><dd>中国浙江省杭州市滨江区庙后王路357号</dd>
			<dt>公司主页</dt><dd><a href="https://class302.taobao.com">https://class302.taobao.com</a></dd>
		</dl>
	</div>
</template>
<style>
	.contact {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.detail {
		text-align: left;
	}
	dd, dt {
		line-height: 30px;
		display: inline;
		margin: 0 4px;
	}
	dt::after {
		content: ":"
	}
	dd + dt::before {
		content: "\A";
		white-space: pre;
	}
	dd + dd::before {
		content: ',';
		font-weight: normal;
	}
	dd a {
		color: #8b9494;
		font-family: "微软雅黑","Helvetica","Arial",sans-serif;
		text-decoration: none;
	}
</style>
<script>
  export default {
    name: 'Contact'
  }
</script>
