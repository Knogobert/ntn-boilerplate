<template>
  <section v-if="blogPosts">
    <h1 class="title">Blog</h1>
    <ul class="cards">
      <li
        v-for="(blogPost, index) in blogPosts"
        :key="index"
      >
        <nuxt-link
          :to="`blog/${blogPost.slug}`"
          class="card card--clickable"
        >
          <span class="w-full">
            <span class="flex justify-between align-baseline">
              <h3 class="card-title">{{ blogPost.title }}</h3>
              <h6
                v-if="blogPost.date"
                class="self-start inline-block mt-0 py-1 px-2 bg-gray text-white text-base font-medium rounded-sm whitespace-no-wrap"
              >{{ formatDate(blogPost.date) }}</h6>
            </span>
            <p class="mt-2">{{ blogPost.description }}</p>
          </span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
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
