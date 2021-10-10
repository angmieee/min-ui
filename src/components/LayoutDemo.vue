<template>
	<h1>Layout 示例</h1>
	<Demo :component="LayoutDemo1" />
</template>

<script lang="ts">
	import Demo from "./Demo.vue";
	import LayoutDemo1 from "./Layout.demo1.vue";

	export default {
		components: {
			Demo,
		},
		setup() {
			return {
				LayoutDemo1
			};
		},
	};
</script>
