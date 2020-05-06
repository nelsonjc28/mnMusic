<template lang="pug">
  #app
      section.section
          nav.nav.has-shadow
              .container
                  .columns.is-multiline
                      .column.is-11
                          input.input.is-large(type="text" ṕlaceholder="buscar" v-model="searchQuery")
                      .column.is-1
                          .field.has-addons
                              a.button.is-primary.is-large(@click="search") Buscar
                              a.button.is-danger.is-large &times
                      .column
                          p.small {{searchMessage}}

              .container
                  .columns.is-multiline
                     .column.is-12(v-for="track in tracks" ) {{track.name}} - {{track.artist}}

</template>

<script>
  let tracks = [
      {name:'cancion1',artist:'artista1'},
      {name:'cancion2',artist:'artista2'},
      {name:'cancion3',artist:'artista3'},
      {name:'cancion4',artist:'artista4'},
      {name:'cancion5',artist:'artista5'},
      {name:'cancion6',artist:'artista6'},
    ]
export default {
  name: 'app' ,
  data () {
    return {
      msg: 'Hola mundo desde vue',
      searchQuery: '',
      tracks: []
    }
  },
  methods:{
    search(){
      this.tracks = tracks
      console.log(this.searchQuery)
    }
  },
  computed:{
    searchMessage(){
      return `Encontrados ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
