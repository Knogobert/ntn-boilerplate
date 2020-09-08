<template>
  <article
    v-if="blogPost"
    class="main article"
  >
    <h1 class="article-title">{{ blogPost.title }}</h1>
    <h6
      v-if="blogPost.date"
      class="inline-block py-1 px-2 my-2 bg-accent text-white font-medium rounded-sm dark:bg-accent whitespace-no-wrap"
    >{{ formatDate(blogPost.date) }}</h6>
    <div v-html="$md.render(blogPost.body)" />
  </article>
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
