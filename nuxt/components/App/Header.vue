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
    return topBarCookie.value !== "hidden";
  });

  const closeTopBar = () => {
    topBarCookie.value = "hidden";
  };

  const colorMode = useColorMode();

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };
</script>

<template>
  <header>
    <UContainer v-if="showTopBar" class="bg-green-500 text-white text-center flex h-14 items-center justify-center">
      <p class="text-sm font-medium text-center">This is an informational top bar message.</p>

      <UButton @click="closeTopBar" icon="i-lucide-x" color="white" class="cursor-pointer" variant="ghost" square />
    </UContainer>

    <!-- <p>colorMode value: <b>{{ $colorMode.value }}</b></p> -->
    <ClientOnly>
      <p>
        colorMode value: <b>{{ colorMode.value }}</b>
      </p>
    </ClientOnly>

    <UNavigationMenu :items="items" />

    <ClientOnly>
      <UButton
        @click="toggleColorMode"
        :icon="colorMode.value === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        class="absolute right-4 top-3 cursor-pointer"
      />
    </ClientOnly>
  </header>
</template>
