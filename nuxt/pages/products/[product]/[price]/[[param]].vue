<script setup>
  const route = useRoute();
  const price = route.params;
</script>

<template>
  <div>
    <h3>price: {{ price }}</h3>
  </div>
</template>
