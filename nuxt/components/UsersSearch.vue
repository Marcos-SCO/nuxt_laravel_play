<script setup>

defineProps({
  users: Object
});

</script>

<template>
  <ul :class="{ scroll: users.length > 5 }">
    <li
      v-for="user in users"
      :key="user.id"
      class="flex items-center justify-start mb-3 p-2 border-b border-gray-200 dark:border-gray-700"
    >
      <img :src="user.avatar" :alt="user.name" class="w-8 h-8 mr-2 rounded-full ml-4" />
      <a href="" @click.prevent="`/users/${user.id}`">{{ user.name }}</a>
    </li>
  </ul>
</template>
