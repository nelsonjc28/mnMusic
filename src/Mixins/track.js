const trackMixin = {

  methods:{
    selectTrack() {
      if (!this.track.preview_url) {
        return
      }
      console.log('hi here')
      this.$store.commit('setTrack', this.track)
    }
  }

}
export default trackMixin
