<template>
  <div>
    <h2>Props</h2>
    <h3>{{name}} {{apellido}}</h3>
  </div>
</template>

<script>
export default {
  name: "Props",
  props: {
    name: {
      type: String,
      required: true
    },
    apellido: {
      type: String,
      required: true  
    }
  }
};
</script>
<style scoped>
    h2 {
        color:darkgoldenrod;
    }
</style>