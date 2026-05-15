<script setup>
  const { users, close } = defineProps({
    users: Object,
    close: Function,
  });

  const router = useRouter();

  const toast = useToast();

  const goToUserPage = (id) => {
    close();
    toast.add({
      title: "toaatyyy",
      description: "works?",
      color: "success",
      // icon: 'i-lucide-search',
    });

    router.push(`/users/${id}`);
  };
</script>

<template>
  <ul :class="{ scroll: users.length > 5 }">
    <li
      v-for="user in users"
      :key="user.id"
      class="flex items-center justify-start mb-3 p-2 border-b border-gray-200 dark:border-gray-700"
    >
      <img :src="user.avatar" :alt="user.name" class="w-8 h-8 mr-2 rounded-full ml-4" />
      <a href="" @click.prevent="goToUserPage(user.id)">{{ user.name }}</a>
    </li>
  </ul>
</template>
