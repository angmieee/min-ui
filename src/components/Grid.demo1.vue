<demo>
常规使用
</demo>
<template>
	<Row>
		<Col>col</Col>
	</Row>
	<Row>
		<Col span="12">col-12</Col>
		<Col span="12">col-12</Col>
	</Row>
	<Row>
		<Col span="8">col-8</Col>
		<Col span="8">col-8</Col>
		<Col span="8">col-8</Col>
	</Row>
	<Row>
		<Col span="6">col-6</Col>
		<Col span="6">col-6</Col>
		<Col span="6">col-6</Col>
		<Col span="6">col-6</Col>
	</Row>
</template>

<script>
	import { Row, Col } from "../lib/index";
	export default {
		components: {
			Row,
			Col,
		},
	};
</script>

<style lang='scss' scoped></style>