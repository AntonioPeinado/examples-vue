<template>
  <div>
    <h2>Model</h2>
    <input type="text" v-model="name">
    <p>Nombre: {{name}}</p>
  </div>
</template>

<script>
export default {
  name: "Model", 
  data(){
      return {
          name: '',
      }
  }
};
</script>
<style scoped>
    h2 {
        color:deeppink;
    }
</style>