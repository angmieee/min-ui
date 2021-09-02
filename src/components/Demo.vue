<template>
	<div
		class="demo"
		:class="{ hover: isHover }"
		@mouseenter="isHover = true"
		@mouseleave="isHover = false"
	>
		<h2>{{ component.__sourceCodeTitle }}</h2>
		<div class="demo-component">
			<Component :is="component" />
		</div>
		<div class="demo-code" :style="{ height: height + 'px' }">
			<pre ref="codeRef" class="language-html" v-html="html" />
		</div>
		<div class="demo-actions" @click="toggleVisible">
			<svg>
				<use
					:xlink:href="!codeVisible ? '#icon-down' : '#icon-up'"
				></use>
			</svg>
			<transition name="fade">
				<span v-show="isHover">{{
					!codeVisible ? "显示代码" : "隐藏代码"
				}}</span>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
	import Button from "../lib/Button.vue";
	import "prismjs";
	import "prismjs/themes/prism.css";
	import { computed, ref, onMounted } from "vue";
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

			const codeRef = ref(null);

			const computedHeight = ref(0);

			const toggleVisible = () => {
				codeVisible.value = !codeVisible.value;
			};

			onMounted(() => {
				computedHeight.value = codeRef.value.getBoundingClientRect().height;
			});

			const isHover = ref(false);

			const html = computed(() => {
				return Prism.highlight(
					props.component.__sourceCode,
					Prism.languages.html,
					"html"
				);
			});

			const height = computed(() => {
				return codeVisible.value ? computedHeight.value : 0;
			});

			return {
				Prism,
				html,
				height,
				codeRef,
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
			border-top: 1px solid $border-color;
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
				position: absolute;
				transition: all 0.3s;
				transform: translateX(-30px);
				&.fade-enter {
					opacity: 0;
					transform: translateX(10px);
				}
				&.fade-enter-to {
					opacity: 1;
					transform: translateX(-30px);
				}
				&.fade-leave {
					opacity: 1;
					transform: translateX(-30px);
				}
				&.fade-leave-to {
					opacity: 0;
					transform: translateX(0px);
				}
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
			transition: height 0.2s;
			overflow: hidden;
			.language-html {
				background-color: #fafafa;
			}

			> pre {
				line-height: 1.1;
				font-family: Consolas, "Courier New", Courier, monospace;
				margin: 0;
			}
		}
		&.hover {
			transition: all 0.3s;
			box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
				0 2px 4px 0 rgb(232 237 250 / 50%);
			.demo-actions {
				> svg {
					transform: translateX(-35px);
				}
			}
		}
	}
</style>