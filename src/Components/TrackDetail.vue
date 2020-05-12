<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                track-component(:track="track")


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
      })
    },
    data() {
      return {
        track: {}
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
</style>
