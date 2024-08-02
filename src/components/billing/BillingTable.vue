<template>
  <v-card>
    <v-card-title>Facturas de Hoy</v-card-title>
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:header>
        <thead>
          <tr>
            <th>Número de Factura</th>
            <th>Link de PDF</th>
            <th>Fecha de Emisión</th>
          </tr>
        </thead>
      </template>
      <template #item="{ item }">
        <tr>
          <td>{{ item.numero_factura }}</td>
          <td><a :href="item.link" target="_blank">Ver PDF</a></td>
          <td>{{ item.time }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { BillingTodayApi } from '@/api/BillingService.js';

export default {
  data() {
    return {
      headers: [
        { text: 'Número de Factura', key: 'numero_factura' },
        { text: 'Link de PDF', key: 'link' },
        { text: 'Fecha de Emisión', key: 'time' }
      ],
      items: []
    };
  },
  created() {
    this.fetchBillingData();
  },
  methods: {
    async fetchBillingData() {
      try {
        const response = await BillingTodayApi();
        this.items = response.data.data; // Asegúrate de acceder a data.data para obtener los items
      } catch (error) {
        console.error('Error fetching billing data:', error);
      }
    }
  }
};
</script>

<style scoped>
.v-data-table {
  margin-top: 16px;
}
</style>
