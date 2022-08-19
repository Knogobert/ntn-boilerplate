<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Blog</h1>
      <posts post-type="blog" :amount="10" />
    </section>
  </main>
</template>

<script setup>
  const { data: posts, pending, refresh, error } = await useAsyncData('posts-list', () => queryContent('/blog').find())

  if (error) showError({ message: "Blog posts not found", cause: error });
</script>
