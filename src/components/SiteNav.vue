<template>
  <nav class="site-nav">
    <ul>
      <li><a class="site-nav__site-logo" v-bind:href="siteURL">{{ siteName }}</a></li>
      <li v-for="navLink in navLinks"><a v-bind:href="navLink.path">{{navLink.name}}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'sitenav',
  data () {
    return {
      siteName: 'JesseGoodenough',
      siteURL: '/',
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
h1, h2 {
  font-weight: normal;
}

.site-nav {
  display: block;
  width: 98%;
  margin: 0em 0.5em;
  border-bottom: 1px solid #24A061;
  height: 23px;

  &__site-logo {
    text-decoration: none;
    color: #000;
    padding: 0 0.5em;
    margin: 0;
    font-weight: bold;
    display: inline-block;
  }
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
