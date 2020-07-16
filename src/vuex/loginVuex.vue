<template>
<div>
   <div>Login</div>
  <form class="login" @submit.prevent.stop="onSubmit">
  <div>
          <label for="emailId">Email</label>
          <input id="emailId" type="email" name="email" v-model="email" />
   </div>
        <div>
          <label for="passwordId">Password</label>
          <input id="passwordId" name="password" v-model="password" />
        </div>
        <button type="submit" class="md-primary">Enviar</button>
  </form>
</div>
</template>

<script>

import { mapState, mapActions } from "vuex";
import { v4 } from "uuid";

export default {
  name: "LoginV",
  data() {
    return {
      emailID: v4(),
      passwordID: v4()
    };
  },
  computed: {
    ...mapState(["email", "password"])
  },
  methods: {
    ...mapActions(["updateEmail", "updatePassword"]),
    onSubmit() {
      console.log({ email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>
.login {
  margin: auto;
  width: 60%;
}
</style>

      

      
      
    

