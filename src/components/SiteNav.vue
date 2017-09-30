<template>
  <div class="site-nav">
    <ul>
      <li><a class="site-nav__site-logo" v-bind:href="siteURL">{{ siteName }}</a></li>
      <li v-for="navLink in navLinks"><a v-bind:href="navLink.path">{{navLink.name}}</a></li>
    </ul>
  </div>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

.site-nav {
  display: block;
  width: 98%;
  margin: 0em .5em;
  border-bottom: 1px solid #24A061;
  height: 23px;
}

.site-nav__site-logo {
  text-decoration: none;
  color: #000;
  padding: 0 .5em;
  margin: 0;
  font-weight: bold;
  display: inline-block;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
}

li a {
    display: inline-block;
    color: #000;
    text-align: center;
    padding: 0 .5em;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    /*background-color: #111;*/
    border-bottom: 2px solid #24A061;
}

li a:active {
    /*background-color: #111;*/
    border-bottom: 2px solid #24A061;
}
</style>
