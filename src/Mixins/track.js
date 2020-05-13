const trackMixin = {

  methods:{
    selectTracky() {
      if (!this.track.preview_url) {
        return
      }
      this.$emit('selectTrack', this.track.id)
      this.$bus.$emit('set-track', this.track)
    }
  }

}
export default trackMixin
