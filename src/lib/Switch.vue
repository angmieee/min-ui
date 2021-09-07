<template>
	<button
		class="gulu-switch"
		@click="toggle"
		:class="{
			'gulu-switch-checked': value,
			'gulu-switch-disabled': disabled,
		}"
		:disabled="disabled"
	>
		<span class="gulu-switch-handle"></span>
	</button>
</template>

<script lang="ts">
	export default {
		props: {
			/* 指定当前是否选中 */
			value: {
				type: Boolean,
				default: false,
			},
			/* 是否禁用 */
			disabled: {
				type: Boolean,
				default: false,
			},
		},

		setup(props, context) {
			const toggle = () => {
				context.emit("update:value", !props.value);
			};

			return {
				toggle,
			};
		},
	};
</script>

<style lang="scss">
	$h: 22px;
	$h2: $h - 4px;
	.gulu-switch {
		height: $h;
		width: $h * 2;
		border: none;
		background-color: #bfbfbf;
		border-radius: $h/2;
		position: relative;
		cursor: pointer;
		.gulu-switch-handle {
			position: absolute;
			top: 2px;
			left: 2px;
			height: $h2;
			width: $h2;
			background: white;
			box-shadow: 0 2px 4px #00230b33;
			border-radius: $h2 / 2;
			transition: all 0.2s;
		}
		&.gulu-switch-checked {
			background-color: #1890ff;
			> .gulu-switch-handle {
				left: calc(100% - #{$h2} - 2px);
			}
		}
		&:active {
			> .gulu-switch-handle {
				width: $h2 + 4px;
			}
		}
		&.gulu-switch-checked:active {
			> .gulu-switch-handle {
				width: $h2 + 4px;
				margin-left: -4px;
			}
		}
		&.gulu-switch-disabled {
			cursor: not-allowed;
			opacity: 0.4;
		}
	}
</style> 