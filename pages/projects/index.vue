<template>
  <section v-if="posts" class="w-full mx-auto max-w-5xl">
    <h1 class="title">Projects</h1>
    <ul class="cards">
      <li
        v-for="(post, index) in posts"
        :key="index"
      >
        <nuxt-link
          class="card card--clickable"
          :to="`projects/${post.slug}`"
        >
          <span>
            <h6 class="inline-block py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category }}</h6>
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="mt-2">{{ post.description }}</p>
          </span>
          <img
            v-if="post.cover"
            class="cover-image"
            :src="post.cover"
          >
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let posts;
    try {
      posts = await $content("projects").fetch();
    } catch (e) {
      error({ message: "Projects not found" });
    }
    return { posts };
  },
}
</script>
