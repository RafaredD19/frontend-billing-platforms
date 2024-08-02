import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function BillingApi(file) {
  const formData = new FormData();
  formData.append('file', file); // 'file' es la key para el archivo en form-data

  return axios.post(`${baseURL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export function BillingTodayApi() {

  return axios.get(`${baseURL}/facturas`);
}