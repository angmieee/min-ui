<template>
  <div class="min-layout-header">
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
  .min-layout-header {
    color: #fff;
    background: #7dbcea;
    height: 64px;
    padding: 0 50px;
    line-height: 64px;
  }
</style>