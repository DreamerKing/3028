<template>
	<div>
		<show-picture-component></show-picture-component>
	</div>
</template>
<style></style>
<script>
  import ShowPicture from 'components/ShowPicture'
  import ShowWords from 'components/ShowWords'
  export default {
    name: 'Show',
    components: {
      'show-picture-component': ShowPicture,
      'show-words-component': ShowWords
    }
  }
</script>
