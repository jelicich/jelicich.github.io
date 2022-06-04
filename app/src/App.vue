<template>
  <div id="app">
    <div class="ContetWrapper">
      <HomePage />
    </div>
  </div>
</template>

<script>
import HomePage from "@/views/HomePage.vue";

export default {
  name: "App",

  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
#app {
  background: $dark;
  border-left: 80px solid rgba(0, 0, 0, 0.3);
  min-height: 100%;
}

.ContetWrapper {
  border-left: 1px solid $gray-dark;
  max-width: 750px;
}
</style>
