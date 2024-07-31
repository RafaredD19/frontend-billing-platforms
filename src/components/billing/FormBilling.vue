<template>
    <v-form @submit.prevent="uploadFile">
      <v-file-input
        v-model="file"
        label="Seleccione un archivo Excel"
        prepend-icon="mdi-file-excel"
        accept=".xls, .xlsx"
        filled
        outlined
        required
      ></v-file-input>
      <v-btn type="submit" color="primary" class="mt-4">Cargar</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        file: null
      };
    },
    methods: {
      uploadFile() {
        if (this.file) {
          // Lógica para manejar el archivo cargado
          console.log('Archivo cargado:', this.file);
          // Aquí puedes implementar la lógica para enviar el archivo al servidor
        } else {
          console.error('No se ha seleccionado ningún archivo');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .mt-4 {
    margin-top: 16px;
  }
  </style>
  