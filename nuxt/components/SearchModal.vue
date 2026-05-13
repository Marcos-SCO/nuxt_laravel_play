<script setup>

  const isOpen = ref(false);
  const loading = ref(false);
  const inputSearch = ref("");
  const searchData = () => {};
</script>

<template>


  <UModal title="Search items" v-model:open="isOpen">
    <template #body>
      <UInput
        placeholder="Type something..."
        v-model="inputSearch"
        color="gray"
        :loading="loading"
        icon="i-heroicons-magnifying-glass"
        class="w-full"
        @keyup.enter="searchData"
      />
    </template>
  </UModal>
</template>
