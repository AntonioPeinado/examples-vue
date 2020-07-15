<template>
<div>
  <h2>Login</h2>
  <form @submit.prevent.stop="onSubmit">
    <div>
      <label :for="emailId">Email:</label>
      <input 
      :id="emailId" 
      name="email" 
      @blur="validateEmail" 
      v-model="email" 
      type="text" 
      />
      <p role="alert" v-if="emailError">{{emailError}}</p>
    </div>
    <div>
      <label :for="passwordId">Password:</label>
      <input
        :id="passwordId"
        name="password"
        @blur="validatePassword"
        v-model="password"
        type="text"
      />
      <p role="alert" v-if="passwordError">{{passwordError}}</p>
    </div>
    <!-- <FormField name="email" id="email" label="Email:" v-model="email" type="text" validators="[isEmail]" >-->
    <button>Submit</button>
  </form>
  </div>
</template>
<script>
import uuid from "uuid";
const isEmail = (value, msg = "Formato de email incorrecto") => {
  const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    value
  );
  return isValidEmail ? "" : msg;
};
//formato de password min 6, max 15, mayusculas, minusculas y (caracteres opcionales)
const isPassword = (value, msg = "Formato de password incorrecto") => {
  const isValidPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/.test(value);
        return isValidPassword ? "" : msg;
};
export default {
  data() {
    return {
      emailId: uuid,
     passwordId: uuid, 
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  },
  methods: {
    onSubmit() {
      this.validateForm();
      if (this.isFormValid()) {
            return console.log({ email: this.email, password: this.password });
        }
         },
    validateForm() {
      this.validateEmail();
      this.validatePassword();
      
    },
    isFormValid() {
      return !this.emailError && !this.passwordError;
    },
    validateEmail() {
      this.emailError = isEmail(this.email, "formato del email incorrecto");
    },
    validatePassword() {
      this.passwordError = isPassword(
        this.password,
        "formato del password incorrecto"
      );
    }
  }
};
</script>
<style scoped>
h2 {
  color: darkblue;
  background-color: aqua;
}
form {
  color:rgb(23, 8, 236);
}
</style>