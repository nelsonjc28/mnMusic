<template lang="pug">
    #app
        .columns
        .card.margin-card.column.is-4.is-offset-5
            .card-body.has-text-centered

                p {{count}}

            .card-footer
                    .field.is-6
                        button.button-right.button.is-primary(@click="incrementar") Incrementar
                    .field.is-6
                        button.button-left.button.is-danger(@click="disminuir") Disminuir


</template>

<script>
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    name: "PracticaVuex",
    methods: {
      ...mapMutations(['incrementar', 'disminuir'])
    },
    computed: {
      ...mapState(['count'])
    },
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .margin-card {
    margin-top: 100px;
  }

  .button-right {
    margin: 60px;
  }

  .button-left {
    margin: 60px;
  }

</style>
