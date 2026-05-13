<script setup>
  import SearchModal from "./SearchModal.vue";

  const overlay = useOverlay();
  const modal = overlay.create(SearchModal);

  const openModal = () => {
    modal.open();
  };
</script>

<template>
  <div>
    <UButton @click="openModal" color="neutral" variant="subtle" icon="i-lucide-search" class="cursor-pointer" />
  </div>
</template>
