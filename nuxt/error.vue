<script setup>
  /*import type { NuxtError } from "#app";
  const props = defineProps({
    error: Object as () => NuxtError,
  });*/
  const error = useError();

  function handleRedirect() {
    return navigateTo("/");
  }
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Error: {{ error?.statusCode }}</h1>
    <p>
      {{ error?.statusMessage || "An error occurred" }}
    </p>

    <button @click="handleRedirect" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded">
      Go Home
    </button>
  </div>
</template>
