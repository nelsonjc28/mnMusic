<template lang="pug">
    .content(v-if="track && track.album")
        p.is128x128
            img(:src="track.album.images[0].url")
        p
            strong {{track.name}}
            small {{track.duration_ms | ms-to-mm}}

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
