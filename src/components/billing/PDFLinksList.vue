<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3>Links de PDFs Generados</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" v-for="(item, index) in items" :key="index">
          <v-card class="mb-3">
            <v-card-title>
              {{ item.data ? item.data.number : "" }}
            </v-card-title>
            <v-card-text>
              <v-btn :href="item.links ? item.links.pdf: ''" target="_blank" color="primary">
                Ver PDF
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'PDFLinksList',
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .mb-3 {
    margin-bottom: 16px;
  }
  </style>
  