<template>
  <main>
    <section>
      <template v-if="error.statusCode === 404">
        <h1 class="title">{{ error.message || 'Page Not Found' }}</h1>
        <h2 class="subtitle">404</h2>
        <p class="mb-4">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      </template>
      <template v-else>
        <h1 class="title">An error occurred</h1>
        <p class="mb-4">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      </template>
      <nav class="mt-12" aria-label="go to home">
        <router-back to="/" class="block"/>
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  name: 'error',
  props: ['error']
}
</script>
