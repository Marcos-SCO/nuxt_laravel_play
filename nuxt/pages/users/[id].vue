<script setup>
  const route = useRoute();
  const id = route.params.id;
</script>

<template>
  <div>
    <h1>User ID : {{ id }}</h1>
  </div>
</template>
