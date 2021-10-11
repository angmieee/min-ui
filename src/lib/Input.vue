<template>
	<div>
		<input
			placeholder="Basic usage"
			class="min-input"
			type="text"
		/>&nbsp;&nbsp;
		<input
			placeholder="Basic usage"
			class="min-input"
			type="text"
			disabled
		/>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	$ant-primary-color-outline: rgba(24, 144, 255, 0.2);
	$ant-primary-color-hover: #40a9ff;
	$ant-primary-5: #40a9ff;
	$border-color: #d9d9d9;
	$placeholder-color: #bfbfbf;
	.min-input {
		font-size: 14px;
		line-height: 1.5715;
		padding: 4px 10px;
		border: 1px solid $border-color;
		border-radius: 2px;
		transition: all 0.3s;
		&:hover {
			border-color: $ant-primary-5;
			border-right-width: 1px !important;
		}
		&:focus {
			border-color: $ant-primary-color-hover;
			box-shadow: 0 0 0 2px $ant-primary-color-outline;
			border-right-width: 1px !important;
			outline: 0;
		}
		&[disabled] {
			border-color: $border-color;
			cursor: not-allowed;
			color: #00000040;
			background-color: #f5f5f5;
		}
		&::placeholder {
			color: $placeholder-color;
		}
	}
</style>