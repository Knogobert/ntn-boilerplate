<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <h5 v-if="post.createdAt"
          class="inline-block py-1 px-2 my-2 bg-gray text-white text-sm font-medium rounded-sm whitespace-no-wrap">{{
              useFormatDate(post.createdAt)
          }}</h5>
        <h1 class="">{{ post.title }}</h1>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <ContentRenderer :value="post" />
      </article>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()

const { data: post, pending, refresh, error } = await useAsyncData(
  'post',
  () => queryContent('/blog', route.params.slug).findOne()
    .catch((err) => console.error(err) || [])
)

// const storedPost = useState(`blog-${route.params.slug}`);
// if (error) showError({ message: "Blog post not found", cause: error });
</script>
