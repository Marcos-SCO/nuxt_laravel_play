<script setup>
  const route = useRoute();

  useHead({
    title: "Users",
    meta: [
      {
        name: "description",
        content: "This is the users page of our Nuxt 3 application",
      },
    ],
  });

  const config = useRuntimeConfig();
  const cursor = ref(null);

  const endpoint = config.public.apiBase + "/users";
  const endpoint2 = "https://fakestoreapi.com/products";

  const nextPage = () => {
    if (users?.value?.next_cursor) {
      cursor.value = users.value.next_cursor;
    }
  };

  const prevPage = () => {
    if (users?.value?.prev_cursor) {
      cursor.value = users.value.prev_cursor;
    }
  };

  const {
    data: users,
    pending,
    error,
    status,
    refresh,
    execute,
  } = await useAsyncData(
    `users`,
    () =>
      $fetch(endpoint, {
        query: { cursor: cursor.value },
      }),
    {
      lazy: true,
      immediate: true,
      method: "POST",
      watch: [cursor],
    },
  );

  const { data: products } = await useFetch(endpoint2, {
    lazy: true,
    key: "products",
  });
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-green-500">Users</h1>

    <p class="mb-4 font-bold mb-4">Status: {{ status }}</p>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" @click="execute">
      Execute API Call (immediate: true)
    </button>

    <div v-if="error">Error: {{ error.message }} Error: {{ error.statusText }}</div>

    <div v-if="pending">Loading...</div>
    <div v-else>
      <ul class="flex flex-wrap">
        <li v-for="(user, index) in users?.data" :key="user.id">
          <NuxtLink :to="`/users/${user.id}`" class="block mb-4 p-4 border rounded max-w-25">Details</NuxtLink>

          <figure class="mb-4 p-4 border rounded max-w-25">
            <figcaption>
              <h3>{{ user?.name }}</h3>
              <p>Email: {{ user?.email }}</p>
            </figcaption>
            <img
              :src="`https://picsum.photos/id/${user.id}/300/200`"
              :alt="user?.name"
              width="200"
              height="200"
              :loading="index > 8 ? 'lazy' : 'eager'"
            />
          </figure>
        </li>
      </ul>

      <nav class="flex gap-4" v-if="users?.prev_cursor || users?.next_cursor">
        <button @click="prevPage" :disabled="!users?.prev_cursor">Previous</button>
        <button @click="nextPage" :disabled="!users?.next_cursor">Next</button>
      </nav>
    </div>
  </div>
</template>
