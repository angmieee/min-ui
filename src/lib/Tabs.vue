<template>
	<div>
        <div v-for="(item, index) in titles" :key="index" >{{item}}</div>
        <component v-for="(item, index) in defaults" :is="item" :key="index"></component>
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
            const titles = defaults.map(tag=>tag.props.title)
            return {
                defaults,
                titles
            }
        }
    };
</script>