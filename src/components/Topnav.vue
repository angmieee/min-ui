<template>
	<div class="topnav">
		<div class="logo">
			<router-link to="/">			
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-huo"></use>
				</svg>
			</router-link>
		</div>
		<ul class="menu">
			<li>
				<router-link to="/doc/intro">文档</router-link>
			</li>
		</ul>
		<svg v-if="toggleMenuVisible" class="toggleAside" @click="toggleMenu">
			<use xlink:href="#icon-menu"></use>
		</svg>
	</div>
</template>
<script lang="ts">
	import { inject, Ref } from "vue";
	export default {
		props: {
			toggleMenuVisible: {
				type: Boolean,
				default: false,
			},
		},
		setup() {
			const menuVisible = inject<Ref<Boolean>>("menuVisible");

			const toggleMenu = () => {
				menuVisible.value = !menuVisible.value;
			};

			return {
				toggleMenu,
			};
		},
	};
</script>
<style lang="scss" scoped>
	$color: #52b69b;
	$darkColor: #007974;
	.topnav {
		color: $color;
		display: flex;
		padding: 16px 50px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		> .logo {
			max-width: 6em;
			margin-right: auto;
			.icon {
				height: 32px;
				width: 32px;
			}
		}
		> .menu {
			display: flex;
			white-space: nowrap;
			flex-wrap: nowrap;
			> li {
				margin: 0 1em;
				a {
					text-decoration: none;
					&:hover {
						transition: 0.3s;
						color: $darkColor;
					}
				}
			}
		}
		> .toggleAside {
			display: none;
			width: 24px;
			height: 24px;
			position: absolute;
			left: 16px;
			top: 50%;
			transform: translateY(-50%);
		}
		@media (max-width: 500px) {
			> .menu {
				display: none;
			}
			> .logo {
				margin: 0 auto;
			}
			> .toggleAside {
				display: inline-block;
			}
		}
	}
</style>