<template>
  <div class="code">
    <h1>{{ headTitle }}</h1>
    <code class="code__body">{{ description }}</code>
  </div>
</template>

<script>
export default {
  name: 'code',
  data () {
    return {
      headTitle: 'Code page header',
      description: `Code Page Section!`
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

.code {
  width:100%;
}

.code__body {
  background-color: #000000;
  color: #28E92C;
  border: 1px solid #FFF;
  width: 100%;
  padding: 2em;
}
</style>
