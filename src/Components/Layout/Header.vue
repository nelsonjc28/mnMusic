<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container
                  .columns
                      .nav-left.column.is-11
                          .nav-item.nombre
                           |   Platzi music
                      .nav-right.nav-menu.column.is-1

                           router-link.nav-item.rutas(to="/" ) Buscar
                           router-link.nav-item.rutas(to="about") Nosotros
        .hero-body
            .container.has-text-centered
                h1.title
                    font-awesome-icon(icon="play")
                    |  Platzi music

                h2.subtitle Canciones que estan vue-nisimas!
                 player-component


</template>
<script>
  import PlayerComponent from "@/Components/PlayerComponent";

  export default {
    components: {
      PlayerComponent
    }
  }
</script>
<style scoped>
 .rutas{
   color:#ffffff;
   margin: 10px;
   font-size: 1.5em;
 }

 .nombre{
   font-size: 1.5em;
 }
</style>
