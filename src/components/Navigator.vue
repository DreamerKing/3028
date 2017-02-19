<template>
	<nav class="navigator">
		<li>
			<router-link class="hvr-wobble-vertical" to="/">首页</router-link>
		</li>
		<li>
			<router-link class="hvr-wobble-vertical" to="/product">产品介绍</router-link>
		</li>
		<li>
			<router-link class="hvr-wobble-vertical" to="/about">关于我们</router-link>
		</li>
		<li>
			<router-link class="hvr-wobble-vertical" to="/contact">联系我们</router-link>
		</li>
	</nav>
</template>
<style>
	nav.navigator{
		background-color: #ccc;
		padding: 0 calc(50% - 480px);
		text-align: center;
		height: 5vh;
		list-style: none;
		display: flex;
	}
	.navigator li {
		width: 240px;
		text-align: center;
	}
	.navigator li a {
		font-size: 18px;
		line-height: 5vh;
		color: #fff;
		text-decoration: none;
	}

	@-webkit-keyframes hvr-wobble-vertical {
	  16.65% {
	    -webkit-transform: translateY(8px);
	    transform: translateY(8px);
	  }
	  33.3% {
	    -webkit-transform: translateY(-6px);
	    transform: translateY(-6px);
	  }
	  49.95% {
	    -webkit-transform: translateY(4px);
	    transform: translateY(4px);
	  }
	  66.6% {
	    -webkit-transform: translateY(-2px);
	    transform: translateY(-2px);
	  }
	  83.25% {
	    -webkit-transform: translateY(1px);
	    transform: translateY(1px);
	  }
	  100% {
	    -webkit-transform: translateY(0);
	    transform: translateY(0);
	  }
	}
	@keyframes hvr-wobble-vertical {
	  16.65% {
	    -webkit-transform: translateY(8px);
	    transform: translateY(8px);
	  }
	  33.3% {
	    -webkit-transform: translateY(-6px);
	    transform: translateY(-6px);
	  }
	  49.95% {
	    -webkit-transform: translateY(4px);
	    transform: translateY(4px);
	  }
	  66.6% {
	    -webkit-transform: translateY(-2px);
	    transform: translateY(-2px);
	  }
	  83.25% {
	    -webkit-transform: translateY(1px);
	    transform: translateY(1px);
	  }
	  100% {
	    -webkit-transform: translateY(0);
	    transform: translateY(0);
	  }
	}
	.hvr-wobble-vertical {
	  display: inline-block;
	  vertical-align: middle;
	  -webkit-transform: perspective(1px) translateZ(0);
	  transform: perspective(1px) translateZ(0);
	  box-shadow: 0 0 1px transparent;
	}
	.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {
	  -webkit-animation-name: hvr-wobble-vertical;
	  animation-name: hvr-wobble-vertical;
	  -webkit-animation-duration: 1s;
	  animation-duration: 1s;
	  -webkit-animation-timing-function: ease-in-out;
	  animation-timing-function: ease-in-out;
	  -webkit-animation-iteration-count: 1;
	  animation-iteration-count: 1;
	}
</style>
<script>
	export default {
	  name: 'Navigator'
	}
</script>
