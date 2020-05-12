<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4

                rise-loader.spiner-centered(color="#48c774" :size="30" :loading="isLoading")

                track-component(:track="track" v-if="!isLoading")


</template>

<script>
  import trackService from "@/services/track";
  import TrackComponent from "@/Components/Track";

  export default {
    name: "TrackDetail",
    created() {
      const id = this.$route.params.id
      trackService.getById(id).then(res => {
        this.track = res

        this.isLoading =false

      })
    },
    data() {
      return {
        track: {},
        isLoading : true
      }
    },
    components: {
      TrackComponent,
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }

  .spiner-centered {
    position: relative;
    left: 85px;
  }
</style>
