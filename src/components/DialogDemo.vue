<template>
	<div>
		<h1>Dialog 示例</h1>
		<Demo :component="DialogDemo1" />
		<Demo :component="DialogDemo2" />
	</div>
</template>

<script>
	import Demo from "./Demo.vue";
	import DialogDemo1 from "./Dialog.demo1.vue";
	import DialogDemo2 from "./Dialog.demo2.vue";
	export default {
		components: {
			Demo
		},
		setup() {
			return {
				DialogDemo1,
				DialogDemo2
			};
		},
	};
</script>