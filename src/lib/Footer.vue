<template>
	<div class="min-layout-footer">
		<slot></slot>
	</div>
</template>

<script>
export default {
  mounted() {
    this.$parent.addChildren(this)
  },
}
</script>

<style lang="scss">
	.min-layout-footer {
		color: #fff;
		background: #7dbcea;
		height: 64px;
		padding: 0 50px;
		line-height: 64px;
	}
</style>