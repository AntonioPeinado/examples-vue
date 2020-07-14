<template>
    <div>
         <h2>Computed</h2>
    <h3>{{unirfrases}}</h3>   
    </div>
</template>

<script>
export default {
    name: 'Computed',
      data() {
    return {
        name: 'Antonio',
        surname: 'Peinado',
    };
      },
    methods: {
          unirfrases() {
              return this.name + ' ' + this.surname;
              }
 }
};
</script> 
<style scoped>
 h2 {
     color:blue;
 }
</style>