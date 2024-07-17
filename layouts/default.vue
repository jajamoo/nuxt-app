

<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"> Moe Kahn </NuxtLink>
      </div>
      <Menu />
    </header>
    <main class="p-2 mt-10"></main>
    <slot />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Moe Kahn',
})
</script>

<style>
body {
  font-family: Monaco, Monaco;
}
</style>