<script setup>
  const route = useRoute();
  const id = route.params.id;
  const baseApi = useRuntimeConfig().public.apiBase;

  const { data: users } = useNuxtData("users");
  // const { data:products } = useNuxtData("products");

  // console.log("data", products.value);

  // const user = users.value?.data?.find(user => parseInt(user.id) === parseInt(id));
  // console.log('products', products.value);

  const { data: user } = useLazyFetch(`${baseApi}/user/${id}`, {
    key: `user-${id}`,
    method: "GET",
    default() {
      return users.value?.data?.find((user) => parseInt(user.id) === parseInt(id)) || null;
    },
  });

  // console.log("user", user.value);
</script>

<template>
  <div>
    <h1>User ID : {{ id }}</h1>

    <p>data: {{ user }}</p>
  </div>
</template>
