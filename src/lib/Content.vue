<template>
  <div class="min-layout-content">
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

<style lang="scss" scoped>
  .min-layout-content {
    min-height: 120px;
    color: #fff;
    line-height: 120px;
    background: rgba(16, 142, 233, 1);
  }
</style>