<template>
  <div class="kanban-card">
    {{ card.title }}
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
};
</script>

<style>
.kanban-card {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
