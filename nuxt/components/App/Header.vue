<script setup>
  const items = [
    {
      label: "Home",
      icon: "i-lucide-home",
      to: "/",
    },
    {
      label: "Users",
      icon: "i-heroicons-users",
      to: "/users",
    },
    {
      label: "Login",
      icon: "i-heroicons-folder",
      to: "/login",
    },
  ];
</script>

<template>
  <header>
    <UNavigationMenu :items="items" />
  </header>
</template>
