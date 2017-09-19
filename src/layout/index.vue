<template>
  <div class="app-layout">
    <app-header></app-header>
    <app-container></app-container>
  </div>
</template>

<script>
import AppHeader from './header';
import AppContainer from './container';

export default {
  components: {
    AppHeader,
    AppContainer,
  },
};
</script>
