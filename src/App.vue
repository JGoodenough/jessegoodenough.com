<template>
  <div id="app">
    <SiteNav></SiteNav>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteNav from './components/SiteNav'

export default {
  name: 'app',
  components: {
    SiteNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
