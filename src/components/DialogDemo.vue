<template>
  <div>
    <h1>Dialog 示例</h1>
    <h2>示例1</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" />
  </div>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup(props) {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    return {
      visible,
      toggle
    }
  }
}
</script>