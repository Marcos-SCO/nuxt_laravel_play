<script setup>

// const show = ref(false);

const runtimeConfig = useRuntimeConfig();

console.log(process.env.NUXT_PUBLIC_API_BASE);

</script>

<template>
  <Header />
  <!-- <LazyDanger v-if="show" />
  <button @click="show = !show">Toggle button</button> -->

  <div class="container p-4">
    <slot />
  </div>
  <Footer />
</template>
