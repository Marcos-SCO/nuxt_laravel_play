<script setup>
  const route = useRoute();
  const id = route.params.name;
</script>

<template>
  <div>
    <h1>Post ID: {{ id }}</h1>
  </div>
</template>
