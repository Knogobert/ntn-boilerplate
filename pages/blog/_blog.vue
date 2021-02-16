<template>
  <section v-if="blogPost">
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>

    <article>
      <h5
        v-if="blogPost.date"
        class="inline-block py-1 px-2 my-2 bg-gray text-white text-sm font-medium rounded-sm whitespace-no-wrap"
      >{{ formatDate(blogPost.date) }}</h5>
      <h1 class="">{{ blogPost.title }}</h1>
      <p class="mt-1 mb-4 text-primary-400 dark:text-primary-500">{{ blogPost.description }}</p>
      <div class="md-content" v-html="$md.render(blogPost.body)" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
