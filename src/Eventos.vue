<template lang="pug">
  #app
      label Nombre
      input(v-model="name")
      button(@click="formatName") Formatear
      p(v-text="formattedName")


</template>

<script>
  export default {
    name: 'Eventos',
    data() {
      return {
        name: '',
        formattedName: '',
      }
    },
    methods:{
      formatName (){
        this.formattedName = this.name.split(' ').join('_').toUpperCase()
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";


</style>
