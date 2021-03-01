<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Boilerplate</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>