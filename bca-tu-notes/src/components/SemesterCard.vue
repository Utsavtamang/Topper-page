<template>
  <div class="semester-card" @click="showContent">
    <h3>Semester {{ semester }}</h3>
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
  methods: {
    showContent() {
      this.$emit('show-content', this.semester);
    },
  },
};
</script>

<style scoped>
.semester-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #f9f9f9;
}
.semester-card:hover {
  background-color: #e0e0e0;
}
</style>