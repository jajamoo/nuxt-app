<template>
  <div class="kanban-board" v-if="columns.length">
    <KanbanColumn
        v-for="(column, index) in columns"
        :key="index"
        :column="column"
        :columnIndex="index"
        @moveCard="moveCard"
    />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import KanbanColumn from './KanbanColumn.vue';
import {fetchProjectCards, getProjectColumns, fetchProjects} from '~/services/github.js';

export default {
  components: {
    KanbanColumn
  },
  data() {
    return {
      columns: []
    };
  },
  async mounted() {
    try {
      const projects = await fetchProjects();
      if (projects.length) {
        // const projectId = projects[0].id;
        const columnsData = await getProjectColumns(1);
        this.columns = await Promise.all(
            columnsData.map(async (column) => {
              const cards = await fetchProjectCards(column.id);
              return {...column, cards: cards.map(card => ({title: card.note}))};
            })
        );
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
