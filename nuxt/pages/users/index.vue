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

  const { data: products, pending } = await useFetch(endpoint, {
    lazy: true,
    transform: (products) => {
      return products.map((product) => ({
        id: product.id,
        price: product.price,
        image: product.image,
        title: product.title,
      }));
    },
  });
</script>

<template>
  <div>
    <h1>Users</h1>

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
