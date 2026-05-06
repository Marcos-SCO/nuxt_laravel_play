<script setup>
  const route = useRoute();
  const products = route.params;
</script>

<template>
  <div>
    <h3>Products index: {{ products }}</h3>
  </div>
</template>
