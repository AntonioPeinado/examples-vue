<template>
    <div>
        <h2>
            Listas
        </h2>
         <ol>
                <li v-for="(fruta,i) in frutas" :key="i">
            {{fruta}}
        </li>
    </ol>
    </div>
</template>

<script>
export default {
    name: 'List',
     data() {
    return {
      frutas: ['naranja', 'manzanas', 'peras', 'melon', 'sandia']
    };
     }
}
</script>
<style scoped>
 h2 {
     color:brown;
 }
</style>