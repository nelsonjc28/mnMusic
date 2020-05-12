<template lang="pug">

  .card(v-if="track && track.album")
      .card-image
          figure.image.is-1by1
              img(:src="track.album.images[1].url")
      .card-content
          .media
              .media-left
                  figure.image.is-48x48
                      img(:src="track.album.images[1].url")

              .media-content
                  p.title.is-6
                      strong {{track.name}}
                  p.subtitle.is-6 {{track.artists[0].name}}

          .container
              .small {{track.duration_ms | ms-to-mm}}
                  nav.level
                      .level-left
                          button.level-item.button.is-primary
                              span.icon.is-small
                                  font-awesome-icon(icon="play" @click="selectTracky")
                          button.level-item.button.is-info
                              span.icon.is-small
                                  font-awesome-icon(icon="info" @click="goToTrack(track.id)")






</template>

<script>
  export default {
    name: "Track",
    props: {
      track: {type: Object, required: true}
    },
    methods: {
      selectTracky() {
        if(!this.track.preview_url) {
          return
        }
        this.$emit('selectTrack', this.track.id)
        this.$bus.$emit('set-track', this.track)
      },
      goToTrack(id) {
        if(!this.track.preview_url) {
          return
        }
        this.$router.push({name: "track", params: {id}})
      }
    },

  }
</script>

<style scoped>

</style>
