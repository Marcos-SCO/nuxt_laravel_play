<script setup>

const show = ref(false);

</script>

<template>
  <Header />
  <!-- <LazyDanger v-if="show" />
  <button @click="show = !show">Toggle button</button> -->

  <img 
    src="img/Pepe_the_frog_is_depicted_as_a_beggar_standing_on.jpg" 
    alt="Pepe the frog" 
    width="300" 
    height="300" />

  <div class="container p-4">
    <slot />
  </div>
  <Footer />
</template>
