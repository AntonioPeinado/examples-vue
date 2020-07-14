<template>
  <div>
    <h1>Ejemplos vue</h1>
     <Binding />
     <Computed />
     <List />
     <Events  @my-event="onMyEvent"/>
     <conditional />
        <CustomInput v-model="value"/>
    <span>{{value}}</span>
    <Directives />
    <Lifecycle />
  </div>
</template>

<script>
import Binding from "./examples/Binding.vue";
import Computed from "./examples/Computed.vue";
import List from "./examples/List.vue";
import Events from './examples/Events.vue';
import Conditional from './examples/Conditional.vue';
import CustomInput from './examples/CustomInput';
import Directives from './examples/Directive';
import Lifecycle from './examples/Lifecycle';
export default {
  name: 'App',
  components: {
  Binding,
  Computed,
  List,
  Events,
  Conditional,
  CustomInput,
  Directives,
  Lifecycle
  },
    methods: {
    onMyEvent(a) {
      alert(a);
    }
  },
   data(){
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}

</style>
