<template lang="pug">
  #app
      input(v-model="name")
      input(v-model="lastName")

      p(v-text="fullName")

</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      name: 'algo',
      lastName: 'algo',
    }
  },
  computed:{
    fullName () {
      return `${this.name}  ${this.lastName}`

    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
