<template>
	<div>
        Tabs
    </div>
</template>

<script lang="ts">
	import Tab from "../lib/Tab.vue";
	export default {
        setup(props, context) {
            const defaults = context.slots.default()
            defaults.forEach(tag=>{
                if (tag.type !== Tab) {
                    throw new Error("子标签必须为 Tab");
                }
            })
            return {
                defaults
            }
        }
    };
</script>