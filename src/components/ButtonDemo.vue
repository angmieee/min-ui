<template>
	<div>
    <h1>Button 示例</h1>
    <h2>示例1</h2>
		<Button
      @click="onClick"
      @focus="onClick"
      @mouseover="onClick">按钮</Button>
    <Button>按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
    <h2>示例2</h2>
    <Button size="big">按钮</Button>
    <Button>按钮</Button>
    <Button size="small">按钮</Button>
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