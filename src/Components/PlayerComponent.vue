<template lang="pug">
    .content(v-if="track && track.album")
        p.is128x128
            img(:src="track.album.images[0].url")
        p
            strong {{track.name}}
            small {{duration}}

        p
            audio(  controls, :src="previewSound")

</template>

<script>
  export default {
    name: "PlayerComponent",
    created() {
      this.$bus.$on('set-track', (track) => {
        this.track = track
      })
    },
    data() {
      return {
        track: {}
      }
    },
    computed: {
      duration() {
        if (this.track.duration_ms) {
          let minutes = this.track.duration_ms / 60000
          return ` ${minutes.toFixed(2)} min`
        }
        return ``

      },
      previewSound() {

        if (this.track.preview_url) {
          return this.track.preview_url
        }
        return ''
      }

    }
  }
</script>

<style scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }

  .content {
    margin-top: 15px;
  }
</style>
