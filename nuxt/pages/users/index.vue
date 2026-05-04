<script setup>
  const route = useRoute();

  useHead({
    title: "Users",
    meta: [
      {
        name: "description",
        content: "This is the users page of our Nuxt 3 application",
      },
    ],
  });
</script>

<template>
  <div>
    <h1>Users</h1>
  </div>
</template>
