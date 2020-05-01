<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          Movie.es
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-center is-8" style="width: 700px">
          <div class="field">
            <div class="control">
              <input name="" class="input is-rounded " style="margin: 5px  0px 0px 200px " placeholder="Search">
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-link">Usuario Usuario <img src="./assets/logo.png" class="is-rounded "
                                                      style="width: 30px"></a>
        </div>
      </div>
    </nav>
    <aside class="menu is-primary">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li>
          <span class="icon">
            <icon :icon="['fas','fa-home']" />
          </span>
        </li>

      </ul>

    </aside>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Hola mundo desde vue'
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";


</style>
