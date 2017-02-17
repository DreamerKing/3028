<template>
	<nav class="navigator">
		<li>
			<router-link to="/">首页</router-link>
		</li>
		<li>
			<router-link to="/product">产品介绍</router-link>
		</li>
		<li>
			<router-link to="/about">关于我们</router-link>
		</li>
		<li>
			<router-link to="/contact">联系我们</router-link>
		</li>
	</nav>
</template>
<style>
	nav.navigator{
		list-style: none;
	}
	.navigator li {
		display: inline-flex;				
	}
	.navigator li a {
		text-decoration: none;
	}
</style>
<script>
	export default {
	  name: 'Navigator'
	}
</script>
