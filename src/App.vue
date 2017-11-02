<template>
  <div id="app">
    <SiteNav></SiteNav>
    <transition name="slide">
      <router-view></router-view>
    </transition>
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
@import './assets/styles/global.scss';

* {
    box-sizing: border-box;
}

body {
  margin: 0;
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
