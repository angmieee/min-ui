<template>
	<div
		class="col"
		:class="[span && `col-${span}`, offset && `offset-${offset}`]"
	>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			span: {
				type: [Number, String],
			},
			offset: {
				type: [Number, String],
			},
		},
	};
</script>

<style scoped lang="scss">
	.col {
		padding: 16px 0;
		margin-bottom: 8px;
		margin-top: 8px;
		background: #0092ff;
		color: #fff;
		width: 100%;
		text-align: center;
		&:nth-child(2n + 1) {
			background: rgba(0, 146, 255, 0.75);
		}

		$class-prefix: col-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}
</style>