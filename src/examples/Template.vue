<template>
  <div>
    <h2>Template</h2>
    <h3>{{datos}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Templates',
  data() {
    return {
      datos: 'cualquier dato'
    };
  }
};
</script>
<style scoped>
    h2 {
        color:cadetblue;
    }
</style>