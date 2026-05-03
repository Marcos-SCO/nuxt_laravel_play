<script setup>
  const route = useRoute();
  const id = route.params.user;
</script>

<template>
  <div>
    <h1>Edit User ID : {{ id }}</h1>
  </div>
</template>
