<template>
  <p class="mb-10">Let's Look At My Repos</p>
  
  <section v-if="pending">Loading... </section>
  <section v-else-if="error">Something went wrong... try again!</section>
  <section v-else>
    <ul class="grid-cols-1 gap-4">
      <li v-for="repository in repos" :key="repository.id" class="border border-gray-200 rounded-sm hover:bg-gray-100 font-mono">
        <a :href="repository.html_url" target="_blank">
          <div class="flex items-center justify-between">
            <div class="font-semibold">{{ repository.name }}</div>
            <div class="font-semibold">{{ repository.stargazers_count }} * </div>
          </div>
          <p class="text-sm">
            {{repository.description}}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
const {error, pending, data} = await useFetch('https://api.github.com/users/jajamoo/repos')
const repos = computed(
    () => data.value.filter(repo=> repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
)
</script>
<style scoped>

</style>

