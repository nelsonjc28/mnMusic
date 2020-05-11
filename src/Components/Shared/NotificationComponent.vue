<template lang="pug">

      .container
          .columns
              .column.is-5
              .notification.is-danger
                  slot(name="body") Algo anduvo mal

</template>

<script>
    export default {
        name: "NotificationComponent"
    }
</script>

<style scoped>

  .notification{
    margin: 20px;
  }

</style>
