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

  const colorMode = useColorMode();

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };
</script>

<template>
  <header>
    <TopBar />

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

    <SearchModalButton />

    <SearchModal />
  </header>
</template>
