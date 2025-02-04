<template>
  <div class="content-card">
    <h3>Semester {{ semester }}</h3>
    <div class="keywords">
      <div v-for="keyword in keywords" :key="keyword" @click="redirect(keyword)">
        {{ keyword }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    semester: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      keywords: ['Notes', 'PDFs', 'Assignments', 'Question Papers'],
    };
  },
  methods: {
    redirect(keyword) {
      this.$router.push({ name: 'SemesterContent', params: { semester: this.semester, keyword } });
    },
  },
};
</script>

<style scoped>
.content-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  background-color: #f9f9f9;
}
.keywords div {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  background-color: #e0e0e0;
  border-radius: 4px;
}
.keywords div:hover {
  background-color: #ccc;
}
</style>