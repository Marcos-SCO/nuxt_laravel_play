<script setup>
  const topBarCookie = useCookie("showTopBar", {
    maxAge: 60, // 1 minute
  });

  const showTopBar = computed(() => {
    return topBarCookie.value !== "hidden";
  });

  const closeTopBar = () => {
    topBarCookie.value = "hidden";
  };
</script>

<template>
  <UContainer v-if="showTopBar" class="bg-green-500 text-white text-center flex h-14 items-center justify-center">
    <p class="text-sm font-medium text-center">This is an informational top bar message.</p>

    <UButton @click="closeTopBar" icon="i-lucide-x" color="white" class="cursor-pointer" variant="ghost" square />
  </UContainer>
</template>
