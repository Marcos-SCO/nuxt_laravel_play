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

  const topBarCookie = useCookie("showTopBar", {
    maxAge: 60, // 1 minute
  });
  
  const showTopBar = computed(() => {
    return topBarCookie.value !== 'hidden';
  });

  const closeTopBar = () => {
    topBarCookie.value = 'hidden';
  };

</script>

<template>
  <header>
    <UContainer v-if="showTopBar" class="bg-green-500 text-white text-center flex h-14 items-center justify-center">
      <p class="text-sm font-medium text-center">This is an informational top bar message.</p>

      <UButton @click="closeTopBar" icon="i-lucide-x" color="white" class="cursor-pointer" variant="ghost" square />
    </UContainer>
    <UNavigationMenu :items="items" />
  </header>
</template>
