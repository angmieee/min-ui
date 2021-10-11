<template>
	<h1>Table 示例</h1>
	<Demo :component="TableDemo1" />
	<Demo :component="TableDemo2" />
</template>

<script lang="ts">
	import Demo from "./Demo.vue";
	import TableDemo1 from "./Table.demo1.vue";
	import TableDemo2 from "./Table.demo2.vue";

	export default {
		components: {
			Demo,
		},
		setup() {
			return {
				TableDemo1,
                TableDemo2
			};
		},
	};
</script>
