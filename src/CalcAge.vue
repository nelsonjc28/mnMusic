<template lang="pug">
  #app
      label Nombre
      input(v-model="name")
      br

      label Apellido
      input(v-model="lastName")
      br

      label Fecha de nacimiento
      input(type="date" v-model="birthday")
      br

      p(v-text="fullName")
      p(v-text="age")


</template>

<script>
  import * as moment from "moment/moment";

  export default {
    name: 'CalcAge',
    data() {
      return {
        name: '',
        lastName: '',
        birthday: ''
      }
    },
    computed: {
      fullName() {
          return `${this.name}  ${this.lastName}`

      },
      age() {
        //aplicando viejo refran sobre la rueda XD
        if (this.birthday) {
          return `su edad es ${moment().diff(this.birthday,'years')}`
        }
        return ''
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";


</style>
