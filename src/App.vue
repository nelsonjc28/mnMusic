<template lang="pug">
  #app
      header-component
      section.section
          nav.nav.has-shadow
              .container
                  .columns.is-multiline
                      .column.is-11
                          input.input.is-large(type="text" ṕlaceholder="buscar" v-model="searchQuery")
                      .column.is-1
                          .field.has-addons
                              a.button.is-primary.is-large(@click="search") Buscar
                              a.button.is-danger.is-large(@click="clear") &times
                      .column
                          p.small {{searchMessage}}

              .container
                  .columns.is-multiline
                     .column.is-2.is-vcentered.is-offset-5
                            propagate-loader.span-centered(color="#48c774" :size="30" :loading="isLoading")
                     .column.is-4(v-for="track in tracks" )
                          track-component(:track="track")

      footer-component


</template>

<script>

  import trackService from "@/services/track";
  import HeaderComponent from "@/Components/Layout/Header";
  import TrackComponent from "@/Components/Track";
  import FooterComponent from "@/Components/Layout/FooterComponent";


  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hola mundo desde vue',
        searchQuery: '',
        tracks: [],
        isLoading: false
      }
    },
    methods: {
      search() {
        if (this.searchQuery) {

          this.isLoading = true

          trackService.search(this.searchQuery)
            .then(res => {
              this.isLoading = false
              this.tracks = res.tracks.items
            })
        }
      },
      clear() {
        this.searchQuery = ""
        this.tracks = []
      }

    },
    computed: {
      searchMessage() {
        return `Encontrados ${this.tracks.length}`
      }
    },
    components: {
      FooterComponent,
      HeaderComponent,
      TrackComponent,
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .span-centered {
    position: relative;
    left: 85px;

  }
</style>
