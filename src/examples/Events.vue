<template>
    <div>
        <h2>Eventos</h2>
         <button @click="onClick">click</button>
    </div>
</template>

<script>
export default {
    name: 'Events',

      methods: {
    onClick(){
      this.$emit('my-event', 'has pulsado el botón');
    },
  }
};
</script>
<style scoped>
    h2 {
        color: greenyellow
    }
</style>