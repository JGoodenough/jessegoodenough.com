<template>
  <nav class="site-nav">
    <transition name="site-nav__slide-fade" appear>
      <router-link class="site-nav__site-logo" :to="siteURL">{{ siteName }}</router-link>
    </transition>
    <transition-group tag="ul" name="list" class="site-nav__menu" v-bind:class="{'site-nav__menu--active': isChange}" appear>
      <li class="site-nav__menu-item" :key="navLink" @click="isChange = !isChange" v-for="navLink in navLinks"><router-link :to="navLink.path">{{navLink.name}}</router-link></li>
    </transition-group>
    <div class="site-nav__mobile-bar-container" @click="isChange = !isChange">
      <div class="site-nav__mobile-bar-1" v-bind:class="{'site-nav__mobile-bar-1--change': isChange}"></div>
      <div class="site-nav__mobile-bar-2" v-bind:class="{'site-nav__mobile-bar-2--change': isChange}"></div>
      <div class="site-nav__mobile-bar-3" v-bind:class="{'site-nav__mobile-bar-3--change': isChange}"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'sitenav',
  methods: {
  },
  data () {
    return {
      siteName: 'JesseGoodenough',
      siteURL: '/',
      isChange: false,
      navLinks: [
        {
          path: 'ultra-running',
          name: 'ultra-running'
        },
        {
          path: 'surf',
          name: 'surf'
        },
        {
          path: 'climb',
          name: 'climb'
        },
        {
          path: 'tea',
          name: 'tea'
        },
        {
          path: 'code',
          name: 'code'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/global.scss';

h1, h2 {
  font-weight: normal;
}

.site-nav {
  display: block;
  width: 98%;
  margin: 0.5em 0.5em;
  height: 25px;
  @include desktop {
    border-bottom: 1px solid $active-color;
  }
  @include mobile {
    border-bottom: none;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  &__slide-fade-enter-active {
    transition: all .8s ease;
  }
  &__slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  &__slide-fade-enter, &__slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-50px);
    opacity: 0;
  }

  &__site-logo {
    text-decoration: none;
    color: $site-color;//#000;
    font-weight: $font-bold;
    padding: 0 0.5em;
    margin: 0;
    font-weight: bold;
    display: inline-block;
    @include desktop {
      width: 15%;
    }
    @include mobile {
      width: 40%;
      margin-top: .25em;
    }
    float: left;
  }

  &__menu {
    display: inline-block;
    // border-bottom: 1px solid $active-color;
    width: 85%;
    float: left;
    @include mobile {
      display: none;
      // TODO: add animation
      // opacity: 0;
      // transition: opacity 0.4s ease-in;
      // -ms-transition: opacity 0.4s ease-in;
      // -moz-transition: opacity 0.4s ease-in;
      // -webkit-transition: opacity 0.4s ease-in;
    }
  }

  &__menu--active {
    @include mobile {
      display: block;
      width: 92%;
      margin: 3em 0;
      z-index: 1;
      position: absolute;
      border: 1px solid $active-color;
      background-color: #FFF;
      padding: .5em 0;

      // TODO: add animation
      // opacity: 1;
      // transition: opacity 0.4s ease-out;
      // -ms-transition: opacity 0.4s ease-out;
      // -moz-transition: opacity 0.4s ease-out;
      // -webkit-transition: opacity 0.4s ease-out;
    }
  }

  &__menu-item {
    @include mobile {
      display: block;
      clear: both;
      text-align: center;
      width: 100%;
    }
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  &__mobile-bar-container {
    cursor: pointer;
    float: right;
    margin: 0 1.25em;
    @include desktop {
      display: none;
    }
    @include mobile {
      display: inline-block;
    }
  }
  &__mobile-bar-1, &__mobile-bar-2, &__mobile-bar-3 {
    // display: block;
    width: 30px;
    height: 5px;
    background-color: $menu-bar-color;
    margin: 5px 0;
    transition: 0.4s;
    @include border-radius(10px);
  }

  /* Rotate first bar */
  &__mobile-bar-1--change  {
      -webkit-transform: rotate(-45deg) translate(-5px, 8px) ;
      transform: rotate(-45deg) translate(-5px, 8px) ;
  }

  /* Fade out the second bar */
  &__mobile-bar-2--change {
      opacity: 0;
  }

  /* Rotate last bar */
  &__mobile-bar-3--change {
      -webkit-transform: rotate(45deg) translate(-6px, -9px) ;
      transform: rotate(45deg) translate(-6px, -9px) ;
  }

}

.router-link-active {
  border-bottom: 2px solid $active-color;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
  float: left;

  a {
    display: inline-block;
    color: #000;
    text-align: center;
    padding: 0 0.5em;
    text-decoration: none;

    &:hover {
      /*background-color: #111;*/
      border-bottom: 2px solid $active-color;
    }

    &:active {
      /*background-color: #111;*/
      border-bottom: 2px solid $active-color;
    }
  }
}
</style>
