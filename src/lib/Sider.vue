<template>
  <div ref="sider" class="min-layout-sider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  mounted() {
    this.$parent.addChildren(this)
  },
  setup(props, context) {
    const sider = ref<HTMLDivElement>(null)
    return {
      sider
    }
  }
}
</script>

<style lang="scss" scoped>
  .min-layout-sider {
    color: #fff;
    background: #3ba0e9;
    line-height: 120px;
    width: 200px;
  }
</style>