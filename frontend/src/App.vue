<template>
  <div id="app">
    <SearchPage />
  </div>
</template>

<script>
import SearchPage from "./components/SearchPage.vue";

export default {
  name: "App",
  components: {
    SearchPage,
  },
};
</script>

<style>
@import "tailwindcss/tailwind.css";
</style>
