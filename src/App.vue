<template lang="pug">
  #app
      header-component

      router-view

      footer-component






</template>

<script>

  import HeaderComponent from "@/Components/Layout/Header";
  import FooterComponent from "@/Components/Layout/FooterComponent";

  export default {
    name: 'app',
    components: {
      FooterComponent,
      HeaderComponent,
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .spiner-centered {
    position: relative;
    left: 85px;
  }

  .is-active {
    border: 3px #48c774 solid;
  }
</style>
