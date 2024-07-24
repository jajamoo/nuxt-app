<template>
  <div>
    <KanbanColumn :columns="columns" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: 'Considering', tasks: ['Task 1', 'Task 2'] },
        { title: 'On Deck', tasks: ['Task 3'] },
        { title: 'In Progress', tasks: ['Task 4', 'Task 5'] },
        { title: 'In Review', tasks: ['Task 6', 'Task 7'] },
        { title: 'Done', tasks: ['Task 8', 'Task 9'] }
      ]
    }
  }
}
</script>