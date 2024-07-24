<template>
  <div class="kanban-column">
    <h3>{{ column.name }}</h3>
    <draggable
        v-model="column.cards"
        group="cards"
        @change="handleChange"
        :data-column-index="columnIndex"
    >
      <template #item="{ element }">
        <KanbanCard :card="element" />
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import KanbanCard from './KanbanCard.vue';

export default {
  components: {
    draggable,
    KanbanCard
  },
  props: {
    column: Object,
    columnIndex: Number
  },
  methods: {
    handleChange(event) {
      this.$emit('moveCard', {
        card: event.item,
        fromColumnIndex: event.from.dataset.columnIndex,
        toColumnIndex: event.to.dataset.columnIndex,
        toCardIndex: event.newIndex
      });
    }
  }
};
</script>

<style>
.kanban-column {
  width: 30%;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}
</style>
