<template>
  <v-container>
    <h1>Subir Archivo de Facturación</h1>
    <form-billing @upload-success="handleUploadSuccess" />
    <billing-table />
  </v-container>
</template>

<script>
import FormBilling from '@/components/billing/FormBilling.vue';
import BillingTable from '@/components/billing/BillingTable.vue';

export default {
  components: {
    FormBilling,
    BillingTable
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    handleUploadSuccess(response) {
      this.items = response;
    }
  }
};
</script>
