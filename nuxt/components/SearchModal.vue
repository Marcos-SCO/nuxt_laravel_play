<script setup>
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
        <ul :class="{ scroll: results.users.length > 5 }">
          <li
            v-for="user in results.users"
            :key="user.id"
            class="flex items-center justify-start mb-3 p-2 border-b border-gray-200 dark:border-gray-700"
          >
            <img :src="user.avatar" :alt="user.name" class="w-8 h-8 mr-2 rounded-full ml-4" />
            <a href="" @click.prevent="`/users/${user.id}`">{{ user.name }}</a>
          </li>
        </ul>
      </div>

      <div v-if="results.posts.length">
        <USeparator orientation="vertical" :label="`POSTS FOUND (${results.posts.length})`" class="my-3" />
        <ul :class="{ scroll: results.posts.length > 5 }">
          <li
            v-for="post in results.posts"
            :key="post.id"
            class="flex items-center justify-start mb-3 p-2 border-b border-gray-200 dark:border-gray-700"
          >
            <img :src="post.thumb" :alt="post.title" class="w-8 h-8 mr-2 rounded-full ml-4" />
            <a href="" @click.prevent="`/posts/${post.slug}`">{{ post.title }}</a>
          </li>
        </ul>
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
