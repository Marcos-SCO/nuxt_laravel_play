<script setup>
  import PostsSearch from "./PostsSearch.vue";
  import UsersSearch from "./UsersSearch.vue";

  const isOpen = ref(false);
  const loading = ref(false);
  const inputSearch = ref("");

  const config = useRuntimeConfig();

  const results = reactive({
    users: [],
    posts: [],
  });

  const searchData = async () => {
    if (!inputSearch.value.trim()) {
      results.users.value = [];
      results.posts.value = [];
      return;
    }

    loading.value = true;

    try {
      const data = await $fetch(`${config.public.apiBase}/search`, {
        method: "GET",
        query: {
          s: inputSearch.value,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Search results:", data);
      results.users = data.users || [];
      results.posts = data.posts || [];
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    } finally {
      loading.value = false;
    }
  };

  watch(inputSearch, (value) => {
    if (!value.length) {
      results.posts = [];
      results.users = [];
    }
  });
</script>

<template>
  <UModal title="Search items" v-model:open="isOpen">
    <template #body>
      <USeparator orientation="vertical" label="SEARCH" class="mb-3" />

      <UInput
        placeholder="Type something..."
        v-model="inputSearch"
        color="gray"
        :loading="loading"
        icon="i-heroicons-magnifying-glass"
        class="w-full"
        @keyup.enter="searchData"
      />

      <div v-if="results.users.length">
        <USeparator orientation="vertical" :label="`USERS FOUND (${results.users.length})`" class="my-3" />
        <UsersSearch :users="results.users" />
      </div>

      <div v-if="results.posts.length">
        <USeparator orientation="vertical" :label="`POSTS FOUND (${results.posts.length})`" class="my-3" />
        <PostsSearch :posts="results.posts" />
      </div>
    </template>
  </UModal>
</template>

<style scoped>
  .scroll {
    overflow-y: scroll;
    max-height: 200px;
  }
</style>
