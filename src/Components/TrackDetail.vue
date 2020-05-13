<template lang="pug">
    .container
        .columns.is-multiline
            .column.is-12(v-if="isLoading")
                rise-loader.spiner-centered(color="#48c774" :size="30" :loading="isLoading")

            .column.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(v-if="track && track.album", :src="track.album.images[0].url")
                    p
                        a.button.is-primary.is-large( @click="selectTracky")
                            span.icon.is-small
                                  font-awesome-icon(icon="play" )


            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{track.name}}
                    .panel-block
                        article.media
                            .media-content
                                .content
                                    ul(v-for="(value,index) in track")
                                        li
                                            strong {{index}}:&nbsp;
                                            span {{value}}

                            nav.level
                                .level-left
                                    a.level-item


</template>

<script>
  import trackService from "@/services/track";
import TrackMixin from "@/Mixins/track";
  export default {
    name: "TrackDetail",
    mixins:[TrackMixin],
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
  .button{
    margin-top: 10px
  }
</style>
