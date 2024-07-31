<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MasterLayout from '@/layouts/MasterLayout.vue';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'div';
    }
  },
  components: {
    MasterLayout
  }
};
</script>
