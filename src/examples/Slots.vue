<template>
  <div>
    <h2>Slots</h2>
    
    <h1>
        <slot name="arriba"></slot>
    </h1>
     <h2>
        <slot></slot> <!--así por defecto-->
    </h2>
    <h3>
        <slot name="abajo"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Slots'
};
</script>
<style scoped>
    h2 {
        color: rgb(202, 41, 235);
    }
</style>