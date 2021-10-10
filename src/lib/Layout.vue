<template>
	<div class="min-layout" :class="layoutClass">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				layoutClass: {
					hasSider: false,
				},
				children: []
			};
		},

		mounted() {
			if (this.children.find(element => !!element.sider === true)) {
				this.layoutClass.hasSider = true
			}
		},
		methods: {
			addChildren(value) {
				this.children.push(value)
			}
		},
		setup() {
			

		}
	};
</script>

<style lang="scss">
	.min-layout {
		flex-grow: 1;
		display: flex;
		flex-direction: column;

		text-align: center;
		&.hasSider {
			flex-direction: row;
			.min-layout-content {
				flex-grow: 1;
			}
		}
	}
</style>