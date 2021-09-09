# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中引入

```
import {Button, Tabs, Switch, Dialog} from "min-ui-vue"
```

就可以使用这些组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "min-ui-vue"
export default {
  components: {Button}
}
</script>
```