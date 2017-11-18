<template>
  <div id="app">
    <SiteNav></SiteNav>
    <transition name="slide-fade" appear mode="out-in">
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
// @import './assets/styles/reset.scss';
@import "~normalize.css/normalize.css";
@import './assets/styles/global';
@import './assets/styles/responsive';

* {
    box-sizing: border-box;
}

// body {
//   margin: 0;
// }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $site-color;
  margin-top: 0;
  background-color: $site-background-color;
  max-width: 100%;
  height: 100%;
  min-height: 50em;
  @include clearfix;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
