<script setup>
  defineProps({
    title: {
      type: String,
      default: "Dangerous",
    },
  });
</script>

<template>
  <div>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">{{ title }}</button>
  </div>
</template>
