<script setup>
  const route = useRoute();
  const product = route.params;
</script>

<template>
  <div>
    <h3>{{ product }}</h3>
  </div>
</template>
