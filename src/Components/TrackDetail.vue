<template lang="pug">
    .container
        .columns.is-multiline

            .column.is-3.has-text-centered
                figure.media-left
                    p.image
                        img(v-if="track && track.album", :src="track.album.images[0].url")
                    p
                        a.button.is-primary.is-large( @click="selectTrack")
                            span.icon.is-small
                                  font-awesome-icon(icon="play" )


            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{trackTitle}}
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
import TrackMixin from "@/Mixins/track";
import {mapState,mapActions,mapGetters} from "vuex";
  export default {
    name: "TrackDetail",
    mixins:[TrackMixin],
    created() {

      const id = this.$route.params.id
    if(!this.track || !this.track.id || !this.track.id != id){
      this.getTrackById({id}).then(()=>{
        console.log("exito!")
      })

    }

    },
    computed:{
      ...mapState(["track"]),
      ...mapGetters(["trackTitle"])
    },
    methods:{
      ...mapActions(["getTrackById"])
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
