<template>
    <div>
         <h2>Conditional</h2>
    <h3 v-if="rojo">Stop</h3>
    <h3 v-if="naranja">Precaución</h3>
    <h3 v-if='verde'>Puedes pasar</h3>
    </div>
</template>

<script>
export default {
    name: 'Conditional',
      data() {
    return {
      rojo: false,
      naranja: false,
      verde: true
    };
  }
}
</script>

<style scoped>
    h2 {
        color:darkslateblue;
    }
</style>