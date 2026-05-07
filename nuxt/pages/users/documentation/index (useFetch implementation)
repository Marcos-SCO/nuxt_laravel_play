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

  /*const endpoint = "https://fakestoreapi.com/products";

  const { data: products, pending, error, status, refresh, execute } = await useFetch(endpoint, {
    lazy: true,
    immediate: false,
    // server: false,
    // pick: ['id', 'price', 'image', 'title'],
    transform: (products) => {
      return products.map((product) => ({
        id: product.id,
        price: product.price,
        image: product.image,
        title: product?.title,
      }));
    },
  });
  */

  const cursor = ref(null);
  const endpoint = config.public.apiBase + "/users";

  const {
    data: users,
    pending,
    error,
    status,
    refresh,
    execute,
  } = await useFetch(endpoint, {
    lazy: true,
    // immediate: false,
    // server: false,
    // pick: ['id', 'price', 'image', 'title'],
    query: { cursor },
  });

  console.log(users);

  const nextPage = () => {
    if (users.value?.next_cursor) {
      cursor.value = users.value.next_cursor;
    }
  };

  const prevPage = () => {
    if (users.value?.prev_cursor) {
      cursor.value = users.value.prev_cursor;
    }
  };
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-green-500">Users</h1>

    <p class="mb-4 font-bold mb-4">Status: {{ status }}</p>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" @click="execute">
      Execute API Call (immediate: true)
    </button>

    <div v-if="error">Error: {{ error.message }} Error: {{ error.statusCode }}</div>

    <div v-if="pending">Loading...</div>
    <div v-else>
      <ul class="flex flex-wrap">
        <li v-for="(user, index) in users?.data" :key="user.id">
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
