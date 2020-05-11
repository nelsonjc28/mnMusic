<template lang="pug">

      .container
          .columns
              .column.is-5
              .notification(:class="typeNotification")
                  slot(name="body") Algo anduvo mal

</template>

<script>
    export default {
        name: "NotificationComponent",
      props:{
          isSuccess:false
      },
      computed:{
          typeNotification(){
            if(this.isSuccess){
              return 'is-success'
            }
            return 'is-danger'
          }

      }
    }
</script>

<style scoped>

  .notification{
    margin: 20px;
  }

</style>
