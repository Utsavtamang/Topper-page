<template>
  <div id="app">
    <h1>BCA TU Notes</h1>
    <div class="semester-grid">
      <SemesterCard
        v-for="semester in 8"
        :key="semester"
        :semester="semester"
        @show-content="showContent"
      />
    </div>
    <ContentCard v-if="selectedSemester" :semester="selectedSemester" />
  </div>
</template>

<script>
import SemesterCard from './components/SemesterCard.vue';
import ContentCard from './components/ContentCard.vue';

export default {
  components: {
    SemesterCard,
    ContentCard,
  },
  data() {
    return {
      selectedSemester: null,
    };
  },
  methods: {
    showContent(semester) {
      this.selectedSemester = semester;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
.semester-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
}
</style>