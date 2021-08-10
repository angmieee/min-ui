<template>
	<div>Tabs 示例</div>
	<h2>示例1</h2>
	<div>
		<Tabs v-model:selected="x">
			<Tab title="标签1">aaa</Tab>
			<Tab title="标签2">bbbb</Tab>
		</Tabs>
	</div>
</template>

<script lang="ts">
	import { ref } from "vue";
	import Tab from "../lib/Tab.vue";
	import Tabs from "../lib/Tabs.vue";

	export default {
		components: {
			Tab,
			Tabs,
		},
		setup() {
			const x = ref('标签1');
			return {
				x
			}
		},
	};
</script>
