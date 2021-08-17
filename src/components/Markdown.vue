<template>
	<article class="markdown-body" v-html="path"></article>
</template>

<script>
	import { ref } from "vue";
	export default {
		props: {
			path: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const path = ref(null);
			import(props.path).then((result) => {
				path.value = result.default;
			});

			return {
				path,
			};
		},
	};
</script>