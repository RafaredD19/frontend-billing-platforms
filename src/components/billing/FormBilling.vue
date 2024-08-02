<template>
  <v-form @submit.prevent="uploadFile">
    <v-row>
      <v-col cols="12" md="8">
        <v-file-input
          v-model="file"
          label="Seleccione un archivo Excel"
          prepend-icon="mdi-file-excel"
          accept=".xls, .xlsx"
          filled
          outlined
          required
          class="mb-4"
        ></v-file-input>
      </v-col>
      <v-col cols="12" md="4" class="d-flex align-center">
        <v-btn 
          type="submit" 
          color="primary" 
          :loading="loading" 
          :disabled="loading"
          class="ml-md-4"
        >
          Cargar
        </v-btn>
      </v-col>
    </v-row>

    <!-- Overlay de procesamiento -->
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <span class="mt-3">Procesando...</span>
    </v-overlay>

    <!-- Modal de confirmación -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Datos cargados con éxito</v-card-title>
        <v-card-text>
          <v-alert type="success" dismissible>
            El archivo ha sido cargado exitosamente.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" text @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import { BillingApi } from '@/api/BillingService.js';

export default {
  data() {
    return {
      file: null,
      loading: false,
      dialog: false
    };
  },
  methods: {
    async uploadFile() {
      if (this.file) {
        this.loading = true;
        try {
          const response = await BillingApi(this.file);
          if (response.status === 200) {
            this.dialog = true; // Muestra el modal de confirmación
            this.$emit('upload-success', response.data); // Emitir el evento con la respuesta de la API
          }
        } catch (error) {
          console.error('Error al cargar el archivo:', error);
          // Manejar el error aquí
        } finally {
          this.loading = false; // Oculta el overlay
        }
      } else {
        console.error('No se ha seleccionado ningún archivo');
      }
    }
  }
};
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}
.ml-md-4 {
  margin-left: 16px;
}
.v-overlay__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
