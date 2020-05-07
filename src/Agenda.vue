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
                          <vue-timepicker v-model="newTask.time" format="hh:mm A"  close-on-complete hide-clear-button></vue-timepicker>


                      .column.is-6.field.has-addons
                            a.button.is-primary(@click="save") Guardar
                            a.button.is-danger(@click="clear") &times

              .column.is-12.field
                  br
                  h2.title Listado de tareas

              table.table.is-striped.is-fullwidth.is-hoverable
                  thead
                      tr
                          td Tarea
                          td Hora
                          td Opciones
                  tbody
                      tr(v-for="(task,index) in tasks")
                          td {{task.name}}
                          td {{task.time}}
                          td
                              a.button.is-danger(@click="deleted(index)") Borrar


</template>

<script>

  export default {
  name: 'Agenda' ,
  data () {
    return {
      name: 'Nelson Castillo',
      tasks: [
        {name:'tarea1', time:'11:00 am'},
        {name:'tarea2', time:'11:00 am'},
        {name:'tarea3', time:'11:00 am'},
        {name:'tarea4', time:'11:00 am'},
        {name:'tarea5', time:'11:00 am'},
      ],
      newTask: {
        name:'',
        time:''
      }


    }
  },
  methods:{
    clear(){
      this.newTask.name = ''
      this.newTask.time =''
    },
    save(){
      if (this.newTask.name !='' && this.newTask.time !='')
      {
        let task = {name:this.newTask.name,time:this.newTask.time}
        this.tasks.push(task)
        this.clear()
      }
    },
    deleted(index){

      this.tasks.splice(index,1)

    }
  },
  computed:{
    searchMessage(){
      return `Encontrados ${this.tracks.length}`
    }
  },
}
</script>

<style lang="scss">
@import "./scss/main.scss";



</style>
