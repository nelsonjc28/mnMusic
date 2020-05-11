<template lang="pug">
  #app
      header-component
      notification(v-if="showNotification")
          p(slot='body') No se encontraron resultados
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
                     .column.is-2.is-vcentered.is-offset-5(v-if="isLoading")
                            propagate-loader.spiner-centered(color="#48c774" :size="30" :loading="isLoading")
                     .column.is-4(v-for="track in tracks" )
                          track-component(:class="{'is-active': track.id === selectedTrack}" :track="track" @selectTrack="setSelectedTrack")

      footer-component





</template>

<script>

  import trackService from "@/services/track";
  import HeaderComponent from "@/Components/Layout/Header";
  import TrackComponent from "@/Components/Track";
  import FooterComponent from "@/Components/Layout/FooterComponent";
  import Notification from "@/Components/Shared/NotificationComponent";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hola mundo desde vue',
        searchQuery: '',
        tracks: [],
        isLoading: false,
        showNotification: false,
        selectedTrack: ''
      }
    },
    mounted() {
    },
    methods: {
      search() {
        if (this.searchQuery) {

          this.isLoading = true

          trackService.search(this.searchQuery)
            .then(res => {
              this.isLoading = false
              this.tracks = res.tracks.items
              this.isNotification(res.tracks.total)
            })
        }
      },
      isNotification(total) {
        if (total === 0) {
          this.showNotification = true

          this.$toast.error('No se encontraron resultados!');

        }
      },

      clear() {
        this.searchQuery = ""
        this.tracks = []
      },
      setSelectedTrack(id) {
        this.selectedTrack = id
      }

    },
    computed: {
      searchMessage() {
        return `Encontrados ${this.tracks.length}`
      }
    },
    watch: {
      showNotification() {
        if (this.showNotification) {
          setTimeout(() => this.showNotification = false, 3000)



        }
      },
    },
    components: {
      FooterComponent,
      HeaderComponent,
      TrackComponent,
      Notification,
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .spiner-centered {
    position: relative;
    left: 85px;
  }

  .is-active {
    border: 3px #48c774 solid;
  }
</style>
