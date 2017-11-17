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
}
.home__background-site-image {
  position: absolute;
  display: flex;
  min-width: 1024px;
  height: 1024px;
  background: url('../assets/images/jesse-tesla-finish.jpeg') no-repeat;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  background-size: cover;
  margin-top: 4em auto;
  text-align: center;
  align-content: center;
  @include clearfix;
}
.home__title {
  position: absolute;
  z-index: 1;
  margin: 4em auto;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.home__sub-title {
  position: absolute;
  z-index: 1;
  margin: 4em auto;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>
