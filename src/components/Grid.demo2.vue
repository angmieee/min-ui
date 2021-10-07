<demo>
左右偏移
</demo>
<template>
	<Row>
		<Col span="8">col-8</Col>
		<Col span="8" offset="8">col-8</Col>
	</Row>
	<Row>
		<Col span="6" offset="6">col-6 offset-6</Col>
		<Col span="6" offset="6">col-6 offset-6</Col>
	</Row>
	<Row>
		<Col span="12" offset="6">col-12 offset-6</Col>
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