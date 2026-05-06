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

  const endpoint = "https://fakestoreapi.com/products";

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
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-green-500">Users</h1>

    <p class="mb-4 font-bold mb-4">Status: {{ status }}</p>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" @click="execute">
      Execute API Call (immediate: true)
    </button>

    <div v-if="error">
      Error: {{ error.message }}
      Error: {{ error.statusCode }}
    </div>

    <div v-if="pending">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="(product, index) in products" :key="product.id">
          <h3>{{ product.title }}</h3>
          <p>Price: {{ product.price }}</p>
          <img
            :src="product.image"
            :alt="product.title"
            width="55"
            height="30"
            :loading="index > 5 ? 'lazy' : 'eager'"
          />
        </li>
      </ul>
    </div>

  </div>
</template>
