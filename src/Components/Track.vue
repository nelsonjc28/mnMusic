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
              .small {{duration}}
                  nav.level
                      .level-left
                          a.level-item
                              span.icon.is-small
                                  font-awesome-icon(icon="play" @click="selectTracky")
                          a.level-item
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
        this.$emit('selectTrack', this.track.id)
        this.$bus.$emit('set-track', this.track)
      },
      goToTrack(id) {
        this.$router.push({name: "track", params: {id}})
      }
    },
    computed: {
      duration() {
        let minutes = this.track.duration_ms / 60000
        return `${minutes.toFixed(2)} min`

      }
    },
  }
</script>

<style scoped>

</style>
