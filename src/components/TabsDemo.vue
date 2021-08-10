<template>
	<div>Tabs 示例</div>
  <h2>示例1</h2>
  <div>
    <Tabs>
      <Tab>aaa</Tab>
      <Tab>aaa</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
	import Tab from "../lib/Tab.vue";
	import Tabs from "../lib/Tabs.vue";

	export default {
		components: {
			Tab,
			Tabs,
		},
		setup() {},
	};
</script>