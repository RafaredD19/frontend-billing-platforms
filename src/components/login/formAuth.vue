<template>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="username"
        label="Usuario"
        required
        outlined
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        label="Contraseña"
        required
        outlined
        prepend-inner-icon="mdi-lock"
        append-icon="mdi-eye"
        @click:append="togglePasswordVisibility"
      ></v-text-field>
      <v-btn type="submit" color="primary" class="mt-4" block>Iniciar Sesión</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        showPassword: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      submitForm() {
        this.$emit('login', { username: this.username, password: this.password });
      }
    }
  };
  </script>
  
  <style scoped>
  .mt-4 {
    margin-top:20px;
    width: 450px;

  }
  </style>
  