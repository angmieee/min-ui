<template>
	<article class="markdown-body" v-html="content"></article>
</template>

<script>
	import { ref } from "vue";
	export default {
		props: {
			content: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			// const path = ref(null);
			// import(props.path).then((result) => {
			// 	path.value = result.default;
			// });

			// return {
			// 	path,
			// };
		},
	};
</script>