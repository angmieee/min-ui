<template>
	<h1>Input 示例</h1>
	<Demo :component="InputDemo1" />
</template>

<script lang="ts">
	import Demo from "./Demo.vue";
	import InputDemo1 from "./Input.demo1.vue";

	export default {
		components: {
			Demo,
		},
		setup() {
			return {
				InputDemo1
			};
		},
	};
</script>
