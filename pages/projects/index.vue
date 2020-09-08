<template>
  <main
    v-if="projectPosts"
    class="main"
  >
    <h1 class="title text-left">Projects</h1>
    <ul
      v-for="(projectPost, index) in projectPosts"
      :key="index"
      class="articles"
    >
      <nuxt-link
        class="article article--clickable"
        :to="`projects/${projectPost.slug}`"
      >
        <h3 class="article-title">{{ projectPost.title }}</h3>
        <div class="mt-4 mb-2">
          <h2 class="inline py-1 px-2 mr-1 bg-accent text-white font-medium rounded-sm dark:bg-accent">{{ projectPost.project_type }}</h2>
          <p class="inline">{{ projectPost.description }}</p>
        </div>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>
