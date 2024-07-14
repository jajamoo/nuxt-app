<template>
    <div>
      Inside a blog post!
    </div>
  <div>
    ID is : {{ route.params.id }}
  </div>
</template>

<script setup>
    const route = useRoute()
    
</script>
