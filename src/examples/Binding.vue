<template>
  <div>
    <h2>Binding</h2>
   
    <button :disabled="true" :foo="1">Disabled</button>
   
    <button @click="onClick">Click</button>
  </div>

</template>

<script>
export default {
  name: "Binding",
  
  methods: {
    onClick(ev){
      console.log(ev);
    },
  } 
};
</script>   
<style scoped>
h2 {
    color:green;
}
</style>