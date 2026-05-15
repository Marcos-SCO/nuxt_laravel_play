<script setup>
  const {posts, close} = defineProps({
    posts: Object,
    close: Function,
  });

  const router = useRouter();

  const goToPostPage = (slug) => {
    close();
    router.push(`/posts/${slug}`); 
  };
</script>

<template>
  <ul :class="{ scroll: posts.length > 5 }">
    <li
      v-for="post in posts"
      :key="post.id"
      class="flex items-center justify-start mb-3 p-2 border-b border-gray-200 dark:border-gray-700"
    >
      <img :src="post.thumb" :alt="post.title" class="w-8 h-8 mr-2 rounded-full ml-4" />
      <a href="" @click.prevent="goToPostPage(post.slug)">{{ post.title }}</a>
    </li>
  </ul>
</template>
