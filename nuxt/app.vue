<script setup></script>

<template>
  <NuxtLoadingIndicator color="#b22" :height="2" :throttle="0" />

  <NuxtLayout name="default">
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
