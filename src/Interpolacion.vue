<template lang="pug">
  #app
      input(v-model="name")
      p {{name}}
      a(:href="url") link
</template>

<script>
export default {
  name: 'Interpolacion',
  data () {
    return {
      name: 'algo',
      url:'https://platzi.com/clases/1145-vuejs-profesional/7795-data-binding/'
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
