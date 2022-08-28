<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <img v-if="post.cover" class="cover-image" :src="post.cover">
        <!-- <h6 class="inline py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category }}</h6> -->
        <h1 class="">{{ post.title }}</h1>
        <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <ContentRenderer :value="post" />
        <div v-if="post.gallery" class="nuxt-content">
          <img v-for="image in post.gallery" class="image" :key="image.id" :src="image">
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()

const { data: post, pending, refresh, error } = await useAsyncData(
  'post',
  () => queryContent('/project', route.params.project).findOne()
    .catch((err) => console.error(err) || [])
)

// const storedProject = useState(`project-${route.params.project}`);
// if (error) showError({ message: "Project not found", cause: error });
</script>
