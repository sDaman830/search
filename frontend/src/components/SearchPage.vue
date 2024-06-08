<template>
  <div class="container mx-auto p-4">
    <input
      v-model="query"
      @input="search"
      type="text"
      class="border p-2 rounded w-full"
      placeholder="Search for clothes..."
    />
    <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <li
        v-for="item in results"
        :key="item.id"
        class="p-2 border rounded shadow"
      >
        <a :href="item.link" class="block">
          <img
            :src="item.image"
            alt=""
            class="w-full h-48 object-cover rounded mb-2"
          />
          <div class="text-center">{{ item.name }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      results: [],
    };
  },
  methods: {
    async search() {
      if (this.query.length > 3) {
        const response = await axios.get(
          `http://localhost:3000/search?q=${this.query}`
        );
        this.results = response.data;
      } else {
        this.results = [];
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
img {
  display: block;
}
</style>
