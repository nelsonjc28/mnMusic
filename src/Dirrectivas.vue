<template lang="pug">
  #app
      p(v-show="showValue") {{ value}}
      p(v-if="showValue") {{ value}}
      p(v-else-if="false") {{ 'algo mas'}}
      p(v-else) {{ 'lo ultimo'}}

      ul
          li(v-for="item in items") {{item}}
</template>

<script>
export default {
  name: 'Directivas',
  data () {
    return {
      msg: 'Hola mundo desde vue',
      showValue: true,
      value: 'algo',
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
