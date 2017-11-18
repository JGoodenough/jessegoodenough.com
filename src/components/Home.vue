<template>
  <div class="home">
    <div class="home__background-site-image">
      <h1 class="home__title">{{ msg }}</h1>
      <p class="home__sub-title">{{ siteDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'A personal site.',
      siteDescription: `I'm a ultra-runner, climber, surfer, route setter, programmer, digital vagabond, problem solver and adventurer.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/global';

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
.home {
  position: relative;
  display: flex;
  min-width: 100%;
  min-height: 50em;
  height: auto;
}
.home__background-site-image {
  // position: absolute;
  display: flex;
  // min-width: 1024px;
  width: 100%;
  // height: 1024px;
  background: url('../assets/images/jesse-tesla-finish.png') no-repeat 50% 50%;
  background-size: contain;
  text-align: center;
  align-content: center;
  margin: 0 auto;
  @include clearfix;

  height: auto;
  margin: 0 auto;
  padding: 10px;
  position: relative;
}
.home__title {
  position: absolute;
  z-index: 1;
  margin: 4em auto;
}
.home__sub-title {
  position: absolute;
  z-index: 1;
  margin: 4em auto;
}
</style>
