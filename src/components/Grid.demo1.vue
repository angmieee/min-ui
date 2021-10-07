<demo>
常规使用
</demo>
<template>
	<div>
		<Row>
			<Col>col</Col>
		</Row>
		<Row>
			<Col>col-12</Col>
			<Col>col-12</Col>
		</Row>
		<Row>
			<Col>col-8</Col>
			<Col>col-8</Col>
			<Col>col-8</Col>
		</Row>
		<Row>
			<Col>col-6</Col>
			<Col>col-6</Col>
			<Col>col-6</Col>
			<Col>col-6</Col>
		</Row>
	</div>
</template>

<script>
	import { Row, Col } from "../lib/index";
	import { ref } from "vue";
	export default {
		components: {
			Row,
			Col,
		},
		setup() {
			return {};
		},
	};
</script>

<style lang='stylus' scoped></style>