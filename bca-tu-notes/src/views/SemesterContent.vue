<template>
  <div>
    <h2>Semester {{ $route.params.semester }} - {{ $route.params.keyword }}</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Display content based on semester and keyword -->
      <p>Content for {{ $route.params.keyword }} in Semester {{ $route.params.semester }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemesterContent',
  data() {
    return {
      loading: true,
      content: null,
    };
  },
  mounted() {
    // Simulate fetching content based on semester and keyword
    this.fetchContent();
  },
  methods: {
    fetchContent() {
      const { semester, keyword } = this.$route.params;
      // Fetch content from an API or local data
      setTimeout(() => {
        this.content = `Fetched ${keyword} for Semester ${semester}`;
        this.loading = false;
      }, 1000); // Simulate network delay
    },
  },
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>