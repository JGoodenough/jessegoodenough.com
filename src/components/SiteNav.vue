<template>
  <nav class="site-nav">
    <ul class="site-nav__desktop">
      <li><router-link class="site-nav__site-logo" :to="siteURL">{{ siteName }}</router-link></li>
      <li v-for="navLink in navLinks"><router-link :to="navLink.path">{{navLink.name}}</router-link></li>
    </ul>
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
    toggleMobileMenu: function () {
      this.isChange = !this.isChange
    }
  },
  data () {
    return {
      siteName: 'JesseGoodenough',
      siteURL: '/',
      isChange: false,
      navLinks: [
        {
          path: 'code',
          name: 'code'
        },
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
  margin: 0em 0.5em;
  height: 23px;

  &__site-logo {
    text-decoration: none;
    color: $site-color;//#000;
    font-weight: $font-bold;
    padding: 0 0.5em;
    margin: 0;
    font-weight: bold;
    display: inline-block;
  }

  &__desktop {
    display: inline-block;
    border-bottom: 1px solid #24A061;
    width: 100%;
    @include mobile {
      display: none;
    }
  }

  &__mobile-bar-container {
    cursor: pointer;
    @include desktop {
      display: none;
    }
    @include mobile {
      display: inline-block;
    }
  }
  &__mobile-bar-1, &__mobile-bar-2, &__mobile-bar-3 {
    // display: block;
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
    @include border-radius(10px);
  }

  /* Rotate first bar */
  &__mobile-bar-1--change  {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
      transform: rotate(-45deg) translate(-9px, 6px) ;
  }

  /* Fade out the second bar */
  &__mobile-bar-2--change {
      opacity: 0;
  }

  /* Rotate last bar */
  &__mobile-bar-3--change {
      -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
      transform: rotate(45deg) translate(-8px, -8px) ;
  }

}

.router-link-active {
  border-bottom: 2px solid #24A061;
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
      border-bottom: 2px solid #24A061;
    }

    &:active {
      /*background-color: #111;*/
      border-bottom: 2px solid #24A061;
    }
  }
}
</style>
