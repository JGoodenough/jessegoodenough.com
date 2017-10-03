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
<style lang="scss">
@import './styles/global.scss';

* {
    box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $site-color;
  margin-top: 0;
  background-color: $site-background-color;
}
</style>
