<template>
	<h1>Grid 示例</h1>
	<Demo :component="GridDemo1" />
	<Demo :component="GridDemo2" />
	<Demo :component="GridDemo3" />
</template>

<script lang="ts">
	import Demo from "./Demo.vue";
	import GridDemo1 from "./Grid.demo1.vue";
	import GridDemo2 from "./Grid.demo2.vue";
	import GridDemo3 from "./Grid.demo3.vue";

	export default {
		components: {
			Demo,
		},
		setup() {
			return {
				GridDemo1,
				GridDemo2,
				GridDemo3,
			};
		},
	};
</script>
