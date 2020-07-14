<template>
    <div>
        <h2>Directives</h2>
          <button type="text" v-autoFocus>autoFocus</button>
    </div>
</template>

<script>
const autoFocus = {
    inserted(e){
        e.focus()
    },
}

export default {
    name: 'Directives',
    directives: {autoFocus}
}
</script>
<style scoped>
    h2 {
        color: dodgerblue;
    }
    button:hover {
        border: 10px solid coral;
        
    }
</style>