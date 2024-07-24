<template>
  <div class="kanban-board">
    <KanbanColumn
        v-for="(column, index) in columns"
        :key="index"
        :column="column"
        :columnIndex="index"
        @moveCard="moveCard"
    />
  </div>
</template>

<script>
import KanbanColumn from './KanbanColumn.vue';

export default {
  components: {
    KanbanColumn
  },
  data() {
    return {
      columns: [
        { name: 'To Do', cards: [{ title: 'Task 1' }, { title: 'Task 2' }] },
        { name: 'In Progress', cards: [{ title: 'Task 3' }] },
        { name: 'Done', cards: [{ title: 'Task 4' }] }
      ]
    };
  },
  methods: {
    moveCard({ card, fromColumnIndex, toColumnIndex, toCardIndex }) {
      this.columns[fromColumnIndex].cards.splice(this.columns[fromColumnIndex].cards.indexOf(card), 1);
      this.columns[toColumnIndex].cards.splice(toCardIndex, 0, card);
    }
  }
};
</script>

<style>
.kanban-board {
  display: flex;
  justify-content: space-between;
}
</style>
