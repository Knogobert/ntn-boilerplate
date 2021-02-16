<template>
  <section v-if="projectPosts">
    <h1 class="title">Projects</h1>
    <ul class="cards">
      <li
        v-for="(projectPost, index) in projectPosts"
        :key="index"
      >
        <nuxt-link
          class="card card--clickable"
          :to="`projects/${projectPost.slug}`"
        >
          <span>
            <h6 class="inline-block py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ projectPost.category }}</h6>
            <h3 class="card-title">{{ projectPost.title }}</h3>
            <p class="mt-2">{{ projectPost.description }}</p>
          </span>
          <img
            v-if="projectPost.cover"
            class="cover-image"
            :src="projectPost.cover"
          >
        </nuxt-link>
      </li>
    </ul>
  </section>
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
