<template>
	<h1>Grid 示例</h1>
	<Demo :component="GridDemo1" />
</template>

<script lang="ts">
	import Demo from "./Demo.vue";
	import GridDemo1 from "./Grid.demo1.vue";

	export default {
		components: {
			Demo,
		},
		setup() {
			return {
				GridDemo1,
			};
		},
	};
</script>
