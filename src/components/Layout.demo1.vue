<demo>
典型布局
</demo>
<template>
  <div class="code-demo">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <div class="code-demo">
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <div class="code-demo">
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <div class="code-demo">
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
	import { Layout, Header, Content, Footer, Sider } from "../lib/index";
	export default {
		components: {
			Layout,
			Header,
			Content,
			Footer,
			Sider,
		},
	};
</script>

<style lang='scss' scoped>
  .code-demo {
    margin-bottom: 48px;
  }
</style>