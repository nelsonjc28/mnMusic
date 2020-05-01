<template lang="pug">
  #app
      div(class="container")

          div(class="columns")

              div(class="card column is-4 is-offset-4 is-vcentered")
                  div(class="card-body")
                      div(class="card-image")
                          img(src="./assets/platzi.png")

                      p(class="title is-4")  Registro estacion platzi

                      form
                           div(class="field")
                               label(class="label") Nombre
                               div(class="control")
                                   input(class="input is-success" type="text" name="nombre")

                           div(class="field")
                               label(class="label") Apellido
                               div(class="control")
                                   input(class="input is-success" type="text" name="apellido")

                           div(class="field")
                               label(class="label") Cargo
                               div(class="control")
                                   input(class="input is-success" type="text" name="cargo")

                  div(class="card-footer")
                      div(class="card-footer-item")
                              button(class="button is-primary ") Enviar
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola mundo desde vue'
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
