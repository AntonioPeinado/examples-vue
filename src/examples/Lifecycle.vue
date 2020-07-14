<template>
  <div>
    <h2>Lifecycle</h2>
    <p>{{foo}}</p>
  </div>
</template>

<script>

export default {
  name: "Lifecycle",
  props: ["foo"],
  beforeCreate() {
     alert('yo soy el beforeCreate=== (constructor) sin acceso a la propiedad');
    
  },
  beforeUpdate() {
    alert('yo soy beforeUpdate para antes de actualizarse');
   
  },
  created() {
     alert('yo soy el create ya tengo acceso a las propiedades');
    
  },
 
  mounted() {
    alert('yo soy mounted una vez pintado y con acceso al elemento');
   
  },
   beforeMount() {
    alert('yo soy beforeMount para antes de pintarse'); 
   
  },
  
  updated() {
    alert('yo soy updated para cuando se actualice en DOM');
    
  },
  beforeDestroy() {
      alert('yo soy beforDestroy para antes de eliminar la instancia del omponente');
   
    
  },
  destroyed() {
      alert('yo soy destroyed para eliminar la instancia del componente')
    
  }
};
</script> 
<style scoped>
  h2 {
      color:aqua;
  }
</style>