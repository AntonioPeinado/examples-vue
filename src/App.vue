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
    <!--<Lifecycle />-->
    <Model />
    <Props :name="'Antonio'" :apellido="'Peinado'" />
    <templates />
    <Slots>
      <p>aquí por defecto</p>
      <template v-slot:arriba>
        <p>aquí pinto la parte de arriba</p>
      </template>
      <template #abajo>
        <p>aquí pinto la parte de abajo</p>
      </template>
     </Slots>
     <Watch />
     <HolaMundo />
     <Login />
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
//import Lifecycle from './examples/Lifecycle';
import Model from './examples/Model.vue';
import Props from './examples/Props.vue';
import Templates from './examples/Template.vue';
import Slots from './examples/Slots.vue';
import Watch from './examples/Watch';
import HolaMundo from './ejerciciospracticos/holaMundo.vue';
import Login from './ejerciciospracticos/login.vue';
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
 // Lifecycle,
  Model,
  Props,
  Templates,
  Slots,
  Watch,
  HolaMundo,
  Login 
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
  },

}
</script>

<style scoped>
h1 {
  color: red;
}

</style>
