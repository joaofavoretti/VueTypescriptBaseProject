<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1>Vue Typescript</h1>

      <v-spacer />

      <v-btn text v-for='path in routes' :key="path.path" @click="$router.push({ name: path.name })">
        <b>{{ path.name }}</b>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { routes } from '@/router/index';

@Component
export default class App extends Vue {
  routes = routes;
}
</script>
