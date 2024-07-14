

<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"> Moe Kahn </NuxtLink>
      </div>
      <Menu />
    </header>
    <slot />
  </div>
</template>
