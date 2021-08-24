<template>
	<div>
		<h1>Switch 组件示例</h1>
		<Demo :component="SwitchExample1" />
		<Demo :component="SwitchExample2" />
	</div>
</template>

<script lang="ts">
	import Demo from "../components/Demo.vue";
	import SwitchExample1 from "./SwitchExample1.vue";
	import SwitchExample2 from "./SwitchExample2.vue";

	export default {
		components: {
			Demo
		},
		setup() {
			return {
				SwitchExample1,
				SwitchExample2,
			};
		},
	};
</script>

<style lang="scss" scoped>
</style>