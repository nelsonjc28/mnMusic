<template lang="pug">
    #app
        .columns
        .card.margin-card.column.is-4.is-offset-5
            .card-body.has-text-centered

                p {{count}}
                p {{getDouble}}

            .card-footer
                    .field.is-6
                        button.button-margin.button.is-primary(@click="incrementar") Incrementar
                    .field.is-6
                        button.button-margin.button.is-danger(@click="disminuir") Disminuir
                    .field.is-6
                        button.button-margin.button.is-primary(@click="incrementAsync") IncrementAsync



</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex'

  export default {
    name: "PracticaVuex",
    methods: {
      ...mapMutations(['incrementar', 'disminuir']),

      incrementAsync() {
        this.$store.dispatch('incrementAsync', {number: 28}).then(()=>{
          console.log('Accion terminada...')
        })
      }
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['getDouble'])
    },
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .margin-card {
    margin-top: 100px;
  }

  .button-margin {
    margin: 20px;
  }


</style>
