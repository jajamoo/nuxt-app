<!-- components/Board.vue -->
<template>
  <div class="board">
    <draggable :list="columns" class="column-list" group="kanban-columns" @end="handleColumnEnd">
      <template #item="{ element, index }">
        <div class="column">
          <h2>{{ element.title }}</h2>
          <draggable :list="element.tasks" class="tasks-list" group="kanban-tasks" @end="handleTaskEnd(index)">
            <template #item="{ element }">
              <div class="task">
                {{ element }}
              </div>
            </template>
          </draggable>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: ['columns'],
  methods: {
    handleColumnEnd(event) {
      // Update columns after column drag-and-drop
      this.columns = event;
    },
    handleTaskEnd(columnIndex) {
      return (event) => {
        // Update tasks within a specific column after task drag-and-drop
        this.$set(this.columns[columnIndex], 'tasks', event.slice()); // Ensure reactivity
      };
    },
  },
};
</script>

<style scoped>
.board {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling if needed */
}

.column {
  min-width: 250px; /* Adjust as needed */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-right: 10px; /* Space between columns */
}

.tasks-list {
  margin-top: 10px;
}

.task {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #fff;
}
</style>
