<template>
  <div>导航栏</div> |
  <router-link to="/dad" >爸爸</router-link> |
  <router-link to="/son">儿子</router-link>
  <hr>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
