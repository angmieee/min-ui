<template>
	<div class="col" :ref="colElement" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script>
	import { ref, inject, computed } from "vue";
	export default {
		props: {
			span: {
				type: [Number, String],
			},
			offset: {
				type: [Number, String],
			},
		},
		setup(props) {
            const {span, offset} = props

			const gutter = inject("gutter");

			const colClass = computed(() => [
				span && `col-${span}`,
				offset && `offset-${offset}`,
			]);

			const colStyle = computed(() => ({
				paddingLeft: gutter / 2 + "px",
				paddingRight: gutter / 2 + "px",
			}));

			const colElement = ref(null);
			return {
				colElement,
				gutter,
                colStyle,
                colClass
			};
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