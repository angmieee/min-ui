<template>
	<div class="row" :style="rowStyle">
		<slot></slot>
	</div>
</template>

<script>
	import { provide, computed } from "vue";
	export default {
		props: {
			gutter: {
				type: [Number, String],
			},
		},
		setup(props) {
			const {gutter} = props

			provide("gutter", gutter);

			const rowStyle = computed(() => ({
				marginLeft: -gutter / 2 + "px",
				marginRight: -gutter / 2 + "px",
			}));

			return {
				rowStyle
			}
		},
	};
</script>

<style scoped lang="scss">
	.row {
		display: flex;
	}
</style>