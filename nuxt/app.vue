<script setup>

const toaster = { position: 'top-right' }
</script>

<template>
  <NuxtLoadingIndicator color="#b22" :height="2" :throttle="0" />

  <NuxtLayout name="default">
    <UApp :toaster="toaster">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
