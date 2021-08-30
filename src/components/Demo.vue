<template>
	<div
		class="demo"
		:class="{ hover: isHover }"
		@mouseover="isHover = true"
		@mouseout="isHover = false"
	>
		<h2>{{ component.__sourceCodeTitle }}</h2>
		<div class="demo-component">
			<Component :is="component" />
		</div>
		<div class="demo-actions" @click="toggleVisible">
			<svg v-show="!codeVisible">
				<use xlink:href="#icon-down"></use>
			</svg>
			<svg v-show="codeVisible">
				<use xlink:href="#icon-up"></use>
			</svg>
			<span v-show="isHover">
				<span v-show="!codeVisible">显示代码</span>
				<span v-show="codeVisible">隐藏代码</span>
			</span>
		</div>
		<div class="demo-code" v-if="codeVisible">
			<pre class="language-html" v-html="html" />
		</div>
	</div>
</template>

<script lang="ts">
	import Button from "../lib/Button.vue";
	import "prismjs";
	import "prismjs/themes/prism.css";
	import { computed, ref } from "vue";
	const Prism = (window as any).Prism;

	export default {
		components: {
			Button,
		},
		props: {
			component: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			const codeVisible = ref(false);

			const toggleVisible = () => {
				codeVisible.value = !codeVisible.value;
			};

			const isHover = ref(false);

			const html = computed(() => {
				return Prism.highlight(
					props.component.__sourceCode,
					Prism.languages.html,
					"html"
				);
			});

			return {
				Prism,
				html,
				codeVisible,
				toggleVisible,
				isHover,
			};
		},
	};
</script>

<style lang="scss" scoped>
	$border-color: #ebebeb;
	.demo {
		border: 1px solid $border-color;
		margin: 16px 0 32px;
		border-radius: 4px;
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
			cursor: pointer;
			text-align: center;
			color: #d3dce6;
			> svg {
				width: 12px;
				height: 12px;
				transition: all 0.3s;
				fill: #d3dce6;
			}
			> span {
				transition: all 0.3s;
				display: inline-block;
			}
			&:hover {
				background-color: #f9fafc;
				> svg {
					fill: #4f8de7;
				}
				> span {
					color: #4f8de7;
				}
			}
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
		&.hover {
			transition: 0.2s;
			box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
				0 2px 4px 0 rgb(232 237 250 / 50%);
			.demo-actions {
				> svg {
					transform: translateX(-10px);
				}
			}
		}
	}
</style>