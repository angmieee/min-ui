<template>
	<div>
		<h1>Switch 组件示例</h1>
		<div class="demo">
			<h2>常规用法</h2>
			<div class="demo-component">
				<SwitchExample1 />
			</div>
			<div class="demo-actions">
				<Button>查看代码</Button>
			</div>
			<div class="demo-code">
				<pre>{{SwitchExample1.__sourceCode}}</pre>
			</div>
		</div>
		<div class="demo">
			<h2>支持 disabled</h2>
			<div class="demo-component">
				<SwitchExample2 />
			</div>
			<div class="demo-actions">
				<Button>查看代码</Button>
			</div>
			<div class="demo-code">
				 <pre>{{SwitchExample2.__sourceCode}}</pre>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	import Switch from "../lib/Switch.vue";
	import SwitchExample1 from "./SwitchExample1.vue";
	import SwitchExample2 from "./SwitchExample2.vue";

	export default {
		components: {
			Switch,
			SwitchExample1,
			SwitchExample2
		},
		setup() {
			const checked = ref(false);
			return {
				checked,
				SwitchExample1,
				SwitchExample2
			};
		},
	};
</script>

<style lang="scss" scoped>
	$border-color: #d9d9d9;
	.demo {
		border: 1px solid $border-color;
		margin: 16px 0 32px;
		> h2 {
			font-size: 20px;
			padding: 8px 16px;
			border-bottom: 1px solid $border-color;
		}
		&-component {
			padding: 16px;
		}
		&-actions {
			padding: 8px 16px;
			border-top: 1px dashed $border-color;
		}
		&-code {
			padding: 8px 16px;
			border-top: 1px dashed $border-color;
			> pre {
				line-height: 1.1;
				font-family: Consolas, "Courier New", Courier, monospace;
				margin: 0;
			}
		}
	}
</style>