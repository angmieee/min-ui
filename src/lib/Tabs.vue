<template>
	<div class="gulu-tabs">
		<div ref="container" class="gulu-tabs-nav">
			<div
				class="gulu-tabs-nav-item"
				:class="{ selected: selected === item }"
				v-for="(item, index) in titles"
				:ref="el => navItems.push(el)"
				@click="select(item)"
				:key="index"
			>
				{{ item }}
			</div>
			<div ref="indicator" class="gulu-tabs-nav-indicator"></div>
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
	import { computed, onMounted, onUpdated, ref } from "vue";
	import Tab from "../lib/Tab.vue";
	export default {
		props: {
			selected: String,
		},
		setup(props, context) {
			const navItems = ref<HTMLDivElement[]>([])
			const indicator = ref<HTMLDivElement>(null)
			const container = ref<HTMLDivElement>(null)

			const compute = () => {
				const divs = navItems.value
				const result = divs.filter(div=>div.classList.contains("selected"))[0]
				const {width} = result.getBoundingClientRect()
				indicator.value.style.width = width + 'px'

				const {left: left1} = container.value.getBoundingClientRect()
				const {left: left2} = result.getBoundingClientRect()
				const left = left2 - left1
				indicator.value.style.left = left + 'px'
			}

			onMounted(compute)

			onUpdated(compute)

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
				navItems,
				indicator,
				container
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
			position: relative;
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
			&-indicator {
				position: absolute;
				height: 3px;
				background: $blue;
				left: 0;
				bottom: -1px;
				transition: all .25s;
			}
		}
		&-content {
			padding: 8px 0;
		}
	}
</style>