<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Blog</h1>
      <posts post-type="blog" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
}
</script>
