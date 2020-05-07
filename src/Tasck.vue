<template lang="pug">
  #app
      nav.navbar.is-primary(role="navigation" aria-label="main navigation")
          .navbar-brand
              a.navbar-item(href="#") tascks

              a.navbar-burger.burger(role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample")
                  span( aria-hidden="true")
                  span(aria-hidden="true")
                  span(aria-hidden="true")

          .navbar-menu
              .navbar-start
              .navbar-center.is-8(style="width: 700px")
                  .field
                      .control
                          input.input.is-rounded(style="margin: 5px  0px 0px 200px " placeholder="Search")
              .navbar-end
                  a.navbar-link {{name}}
                      img.is-rounded(src="./assets/logo.png" style="width: 30px")


      .container
          .columns.is-multiline
              .column.is-12
                  br
                  h2.title Crear una tarea

              .column.is-12
                  form.columns
                      .field.column.is-4
                          input.input(v-model="newTask.name")
                      .field.column.is-2
                          input.input(v-model="newTask.time" type="number" min="0")


                      .column.is-6.field.has-addons
                            a.button.is-primary(@click="save") Guardar
                            a.button.is-danger(@click="clear") &times

              .column.is-12.field
                  br
                  h2.title Listado de tareas

                  h3(v-if="!countTasks").title No hay tareas cargadas

              table.table.is-striped.is-fullwidth.is-hoverable(v-if="countTasks")
                  thead
                      tr
                          td Tarea
                          td Hora
                          td Opciones
                  tbody
                      tr(v-for="(task,index) in tasks")
                          td {{task.name}}
                          td {{task.time}} h
                          td
                              a.button.is-danger(@click="deleted(index)") Borrar
              .tag.are-large
                  span.tag.is-primary(v-if="countTasks") {{totalHours}}


</template>

<script>

  export default {
    name: 'Task',
    data() {
      return {
        name: 'Nelson Castillo',
        tasks: [],
        newTask: {
          name: '',
          time: 0
        }


      }
    },
    mounted() {

      this.getLocalstorageTasks()

    },
    methods: {
      clear() {
        this.newTask.name = ''
        this.newTask.time = 0
      },

      save() {
        if (this.newTask.name != '' && this.newTask.time != 0) {
          let task = {name: this.newTask.name, time: this.newTask.time}
          this.tasks.push(task)
          this.setTasksLocalstorage()
          this.clear()
        }
      },

      setTasksLocalstorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      },

      deleted(index) {
        this.tasks.splice(index, 1)
        this.removeLocalstorageTasks()
      },

      removeLocalstorageTasks() {
        localStorage.removeItem('tasks')
        this.setTasksLocalstorage()
      },

      getLocalstorageTasks() {
        if (localStorage.getItem('tasks')) {
          this.tasks = JSON.parse(localStorage.getItem('tasks'))
        }

      }
    },

    computed: {
      countTasks() {
        return this.tasks.length
      },

      totalHours() {
        let totalHours = 0
        if (this.tasks.length) {
          this.tasks.forEach((task) => {
            return totalHours += parseInt(task.time)
          })
          return `Tiempo trabajado ${totalHours} h`
        }
      }
    },
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";


</style>
