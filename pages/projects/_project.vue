<template>
  <section v-if="projectPost">
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>

    <article>
      <img
        v-if="projectPost.cover"
        class="cover-image"
        :src="projectPost.cover"
      >
      <!-- <h6 class="inline py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ projectPost.category }}</h6> -->
      <h1 class="">{{ projectPost.title }}</h1>
      <p class="mt-1 mb-8 text-primary-400 dark:text-primary-500">{{ projectPost.description }}</p>
      <div
        v-if="projectPost.body"
        class="md-content"
        v-html="$md.render(projectPost.body)"
      />
      <div v-if="projectPost.gallery" class="md-content">
        <img
          v-for="image in projectPost.gallery"
          class="image"
          :key="image.id"
          :src="image"
        >
      </div>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { projectPost: payload }
    else
      return {
        projectPost: await require(`~/assets/content/projects/${params.project}.json`)
      }
  }
}
</script>
