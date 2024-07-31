<template>
    <div class="text-center">
      <v-menu v-model="menu" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-chevron-down" size="small" variant="text" v-bind="props" :class="{ 'rotated': isRotated }" @click="rotateIcon"></v-btn>
        </template>
  
        <v-card min-width="200">
          <v-divider></v-divider>
          <v-list>
            <v-list-item class="px-5">
              <div class="cursor-pointer transition hover:text-blue-300 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm">
                <i class="fa-solid fa-user"></i>
                <span> Perfil</span>
              </div>
            </v-list-item>
            <v-list-item class="px-5">
              <div class="cursor-pointer transition hover:text-blue-300 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm">
                <i class="fa-solid fa-gear"></i>
                <span> Configuración</span>
              </div>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item class="px-3">
              <div class="cursor-pointer transition hover:text-blue-300 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm" @click="logout">
                <span> Cerrar sesión</span>
            
              </div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router"; // Importa el router de Vue
  
  export default {
    setup() {
      const isRotated = ref(false);
      const menu = ref(false);
      const router = useRouter(); // Inicializa el router
  
      const rotateIcon = () => {
        isRotated.value = !isRotated.value;
      };
  
      const logout = () => {
        localStorage.clear();
        router.push({ name: 'login' }); // Utiliza el router para redirigir al login
      };
  
      return {
        menu,
        isRotated,
        rotateIcon,
        logout
      };
    }
  };
  </script>
  
  <style scoped>
  .rotated {
    transform: rotate(180deg);
  }
  
  .v-list-item__content.v-list-item-title {
    font-size: 0.8rem !important;
  }
  
  .v-list-item__content.v-list-item-subtitle {
    font-size: 0.8rem !important;
  }
  </style>
  