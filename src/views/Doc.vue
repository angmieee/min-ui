<template>
	<div class="layout">
		<Topnav :toggleMenuVisible="true" class="nav" />
		<div class="content">
			<aside :class="{open: menuVisible}">
				<h2>文档</h2>
				<ol>
					<li>
						<router-link to="/doc/intro">介绍</router-link>
					</li>
					<li>
						<router-link to="/doc/install">安装</router-link>
					</li>
					<li>
						<router-link to="/doc/get-started"
							>开始使用</router-link
						>
					</li>
				</ol>
				<h2>组件列表</h2>
				<ol>
					<li>
						<router-link to="/doc/switch">
							<span>Switch</span>
							<span class="chinese">开关</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/button">
							<span>Button</span>
							<span class="chinese">按钮</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/dialog">
							<span>Dialog</span>
							<span class="chinese">对话框</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/tabs">
							<span>Tabs</span>
							<span class="chinese">标签页</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/grid">
							<span>Grid</span>
							<span class="chinese">栅格</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/layout">
							<span>Layout</span>
							<span class="chinese">布局</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/collapse">
							<span>Collapse</span>
							<span class="chinese">折叠面板</span>
						</router-link>
					</li>
					<!-- <li>
						<router-link to="/doc/popover">
							<span>Popover</span>
							<span class="chinese">气泡卡片</span>
						</router-link>
					</li> -->
					<!-- <li>
						<router-link to="/doc/icon">
							<span>Icon</span>
							<span class="chinese">图标</span>
						</router-link>
					</li> -->
					<li>
						<router-link to="/doc/input">
							<span>Input</span>
							<span class="chinese">输入框</span>
						</router-link>
					</li>
					<li>
						<router-link to="/doc/table">
							<span>Table</span>
							<span class="chinese">表格</span>
						</router-link>
					</li>
				</ol>
			</aside>
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>
<script lang="ts">
	import Topnav from "../components/Topnav.vue";
	import { inject, Ref } from "vue";
	export default {
		components: { Topnav },
		setup() {
			const menuVisible = inject<Ref<Boolean>>("menuVisible");

			return {
				menuVisible,
			};
		},
	};
</script>
<style lang="scss" scoped>
	$fontColor: #52b69b;
	.layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		> .nav {
			flex-shrink: 0;
		}
		> .content {
			flex-grow: 1;
			padding-top: 60px;
			padding-left: 280px;
			@media (max-width: 500px) {
				padding-left: 0;
			}
		}
	}
	.content {
		display: flex;
		> aside {
			flex-shrink: 0;
		}
		> main {
			flex-grow: 1;
			padding: 16px;
			background: #fff;
		}
	}
	aside {
		background-color: #fff;
		// box-shadow: 3px 0 3px rgba(#333, 0.1);
		box-shadow: 0 2px 8px #f0f1f2;
		border-right: 1px solid #f0f0f0;
		width: 280px;
		padding: 16px 0;
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 70px;
		height: 100%;
		overflow-x: hidden;
		z-index: 1;
		transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
		@media (max-width: 500px) {
			transform: translateX(-300px);
			box-shadow: 0 0 10px rgba(0,0,0,0.2);
			&.open {
				transform: translateX(0px);
			}
		}
		> h2 {
			margin-bottom: 4px;
			padding: 0 50px;
		}
		> ol {
			> li {
				> a {
					display: block;
					position: relative;
					padding: 8px 50px;
					text-decoration: none;
					transition: color 0.3s;
					font-size: 16px;
					&:hover {
						color: $fontColor;
					}
					> span {
						&.chinese {
							margin-left: 6px;
							font-weight: 400;
							font-size: 12px;
							opacity: 0.67;
						}
					}
				}
				.router-link-active {
					// background: #d2f8eb;
					background-color: #f0fcef;
					border-right: 3px solid $fontColor;
					color: $fontColor;
					@media (min-width: 500px) {
						border-right: none;
						&::after {
							content: "";
							display: block;
							animation: bdrolate 0.8s;
							position: absolute;
							top: 0;
							right: 0;
							width: 3px;
							height: 40px;
							background-color: $fontColor;
						}
					}
				}
			}
		}
	}
	main {
		overflow: auto;
	}

	@keyframes bdrolate {
		0% {
			transform: rotateX(90deg);
		}
		100% {
			transform: rotateX(0deg);
		}
	}
</style>