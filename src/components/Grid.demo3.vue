<demo>
区块间隔
</demo>
<template>
	<Row gutter="16">
		<Col class="gutter-row" span="6">
            <div :style="style">col-6</div>
        </Col>
		<Col class="gutter-row" span="6">
            <div :style="style">col-6</div>
        </Col>
		<Col class="gutter-row" span="6">
            <div :style="style">col-6</div>
        </Col>
		<Col class="gutter-row" span="6">
            <div :style="style">col-6</div>
        </Col>
	</Row>
</template>

<script>
    import { ref } from "vue";
	import { Row, Col } from "../lib/index";
	export default {
		components: {
			Row,
			Col,
		},
		setup() {
			const style = ref({ background: "#0092ff", padding: "8px 0" });
            return {
                style
            }
		},
	};
</script>

<style lang='scss' scoped>
    .gutter-row {
        background: #fff;
        &:nth-child(2n+1) {
            background: #fff;
        }
    }
</style>