<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>{{ siteDescription }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'A personal site.',
      siteDescription: `I'm a programmer, digital vagabond, problem solver, adventurer, ultra-runner, climber, route setter and surfer.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
