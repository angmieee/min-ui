<demo>
带边框表格
</demo>

<template>
	<Table :columns="columns" :data="dataSource" border />
</template>

<script lang="ts">
	import Table from "../lib/Table.vue";
	export default {
		components: {
			Table,
		},
		setup() {
			const dataSource = [
				{
					date: "2021-05-02",
					name: "萧瑟",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2021-02-04",
					name: "雷无桀",
					address: "上海市普陀区金沙江路 1517 弄",
				},
				{
					date: "2019-05-01",
					name: "李寒衣",
					address: "上海市普陀区金沙江路 1519 弄",
				},
				{
					date: "2019-05-03",
					name: "赵玉真",
					address: "上海市普陀区金沙江路 1516 弄",
				},
			];
			const columns = [
				{
					title: "日期",
					key: "date",
				},
				{
					title: "姓名",
					key: "name",
				},
				{
					title: "地址",
					key: "address",
				},
			];
			return {
				dataSource,
				columns,
			};
		},
	};
</script>