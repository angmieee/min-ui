<template>
	<div>
		<h1>Dialog 示例</h1>
		<h2>示例1</h2>
		<Button @click="toggle">toggle</Button>
		<Dialog
			:maskClosable="false"
			v-model:visible="visible"
			:onOk="() => (visible = false)"
			:onCancel="() => (visible = false)"
		>
			<template v-slot:title>
				<h2>标题</h2>
			</template>
			<template v-slot:content>
				<p>这里是内容</p>
			</template>
		</Dialog>
	</div>
</template>

<script>
	import Dialog from "../lib/Dialog.vue";
	import Button from "../lib/Button.vue";
	import { ref } from "vue";
	export default {
		components: {
			Dialog,
			Button,
		},
		setup(props) {
			const visible = ref(false);
			const toggle = () => {
				visible.value = !visible.value;
			};
			return {
				visible,
				toggle,
			};
		},
	};
</script>