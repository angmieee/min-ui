<template>
	<div>
		<h1>Button 示例</h1>
		<Demo :component="ButtonDemo1" />
		<Demo :component="ButtonDemo2" />
		<Demo :component="ButtonDemo3" />
		<Demo :component="ButtonDemo4" />
		<Demo :component="ButtonDemo5" />
	</div>
</template>

<script>
	import Demo from "./Demo.vue";
	import ButtonDemo1 from "./Button.demo1.vue";
	import ButtonDemo2 from "./Button.demo2.vue";
	import ButtonDemo3 from "./Button.demo3.vue";
	import ButtonDemo4 from "./Button.demo4.vue";
	import ButtonDemo5 from "./Button.demo5.vue";

	export default {
		components: {
			Demo
		},
		setup() {
			return {
				ButtonDemo1,
				ButtonDemo2,
				ButtonDemo3,
				ButtonDemo4,
				ButtonDemo5,
			};
		},
	};
</script>