<template lang="pug">
  #app
      section.section
          nav.nav.has-shadow
              .container
                  .columns.is-multiline
                      .column.is-11
                          input.input.is-large(type="text" ṕlaceholder="buscar" v-model="searchQuery")
                      .column.is-1
                          .field.has-addons
                              a.button.is-primary.is-large(@click="search") Buscar
                              a.button.is-danger.is-large &times
                      .column
                          p.small {{searchMessage}}

              .container
                  .columns.is-multiline
                     .column.is-12(v-for="track in tracks" )
                        | {{track.name}} - {{track.artists[0].name}}


</template>

<script>

  import trackService from "./services/track";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hola mundo desde vue',
        searchQuery: '',
        tracks: []
      }
    },
    methods: {
      search() {
        if (this.searchQuery) {
          trackService.search(this.searchQuery)
            .then(res => {
              this.tracks = res.tracks.items
            })
        }

      }
    },
    computed: {
      searchMessage() {
        return `Encontrados ${this.tracks.length}`
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";


</style>
