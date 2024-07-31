<template>
    <v-app>
      <v-container fluid fill-height>
        <v-row no-gutters class="fill-height">
          <v-col cols="12" md="6" class="image-column fill-height">
            <!-- Imagen de fondo -->
          </v-col>
          <v-col cols="12" md="6" class="form-column fill-height d-flex align-center justify-center">
            <v-card class="elevation-12" max-width="500">
              <v-card-title class="headline">Iniciar Sesión</v-card-title>
              <v-card-text>
                <form-auth @login="handleLogin" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import FormAuth from '@/components/login/formAuth.vue';
  
  export default {
    components: {
      FormAuth
    },
    methods: {
      handleLogin(credentials) {
        // Simulación de autenticación
        if (credentials.username === 'test' && credentials.password === '1234') {
          // Redirigir a la vista de Billing
          this.$router.push({ name: 'billing' });
        } else {
          alert('Credenciales incorrectas. Use username: test y password: 1234');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .image-column {
    background-image: url('@/assets/login.png');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }
  
  .form-column {
    padding: 16px;
    min-height: 100vh;
  }
  </style>
  