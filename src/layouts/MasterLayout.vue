<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" permanent>
      <v-list dense>
        <v-list-item>
          <v-list-item-title>Menú</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link @click="navigateTo('dashboard')">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="navigateTo('billing')">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Billing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mi Aplicación</v-toolbar-title>
      <v-spacer></v-spacer>
      <MenuAsPopover />
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuAsPopover from '@/components/general/MenuAsPopover.vue';

export default {
  components: {
    MenuAsPopover
  },
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales personalizados */
</style>
