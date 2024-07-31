<template>
  <v-container>
    <h1>Subir Archivo de Facturación</h1>
    <form-billing />
  </v-container>
</template>

<script>
import FormBilling from '@/components/billing/FormBilling.vue';

export default {
  components: {
    FormBilling
  }
};
</script>
