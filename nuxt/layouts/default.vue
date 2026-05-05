<script setup>

const show = ref(false);

</script>

<template>
  <Header />
  <LazyDanger v-if="show" />

  <button @click="show = !show">Toggle button</button>

  <div class="container p-4">
    <slot />
  </div>
  <Footer />
</template>
