<template>
	<div>
		<Button
      @click="onClick"
      @focus="onClick"
      @mouseover="onClick">按钮</Button>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
	</div>
</template>

<script>
	import Button from "../lib/Button.vue";

	export default {
		components: {
			Button,
		},
		setup() {
      const onClick = () => {
        console.log('button');
      }

      return {
        onClick
      }
    }
	};
</script>