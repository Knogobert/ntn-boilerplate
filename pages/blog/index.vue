<template>
  <section v-if="posts" class="w-full mx-auto max-w-5xl">
    <h1 class="title">Blog</h1>
    <ul class="cards">
      <li
        v-for="(post, index) in posts"
        :key="index"
      >
        <nuxt-link
          :to="`blog/${post.slug}`"
          class="card card--clickable"
        >
          <span class="w-full">
            <span class="flex justify-between align-baseline">
              <h3 class="card-title">{{ post.title }}</h3>
              <h6
                v-if="post.createdAt"
                class="self-start inline-block mt-0 py-1 px-2 bg-gray text-white text-base font-medium rounded-sm whitespace-no-wrap"
              >{{ formatDate(post.createdAt) }}</h6>
            </span>
            <p class="mt-2">{{ post.description }}</p>
          </span>
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
      posts = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
