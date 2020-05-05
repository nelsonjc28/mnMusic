<template lang="pug">
 h1 {{msg}}
  p {{ 1 + 1}}
  p {{ 'hola' +'Mundo'}}
  p {{ person.name}}
  p {{ person.name.toUpperCase()}}
  p {{ JSON.stringify(person)}}
  p {{ true ? 'true':'false'}}
</template>

<script>
export default {
  name: 'expresiones',
  data () {
    return {
      msg: 'Hola mundo desde vue',
      person: {name:'juan'}
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
