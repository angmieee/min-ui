<template>
	<div class="gulu-tabs">
		<div class="gulu-tabs-nav">
			<div
				class="gulu-tabs-nav-item"
				:class="{ selected: selected === item }"
				v-for="(item, index) in titles"
				@click="select(item)"
				:key="index"
			>
				{{ item }}
			</div>
		</div>
		<div class="gulu-tabs-content">
			<component
				class="gulu-tabs-content-item"
				:is="current"
				:key="current.props.title"
			></component>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed } from "vue";
	import Tab from "../lib/Tab.vue";
	export default {
		props: {
			selected: String,
		},
		setup(props, context) {
			const defaults = context.slots.default();
			defaults.forEach((tag) => {
				if (tag.type !== Tab) {
					throw new Error("子标签必须为 Tab");
				}
			});

			const current = computed(() => {
				const current = defaults.find(
					(tag) => tag.props.title === props.selected
				);
				return current;
			});

			const titles = defaults.map((tag) => tag.props.title);

			const select = (title) => {
				context.emit("update:selected", title);
			};

			return {
				defaults,
				titles,
				current,
				select,
			};
		},
	};
</script>

<style lang="scss">
	$blue: #40a9ff;
	$color: #333;
	$border-color: #d9d9d9;
	.gulu-tabs {
		&-nav {
			display: flex;
			color: $color;
			border-bottom: 1px solid $border-color;
			&-item {
				padding: 8px 0;
				margin: 0 16px;
				cursor: pointer;
				&:first-child {
					margin-left: 0;
				}
				&.selected {
					color: $blue;
				}
			}
		}
		&-content {
			padding: 8px 0;
		}
	}
</style>