<template>
  <nav class="fixed top-0 inset-x-0 p-3" aria-label="Main Menu">
    <ul class="flex">
      <li class="flex-1">
        <nuxt-link class="btn block" to="/">Home</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block" to="/projects">Projects</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-gray-100 border-gray-400 bg-gray bg-opacity-25;
  &:hover {
    @apply text-white bg-gray-600;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-gray-100 border-gray-400;
    &:hover {
      @apply text-white;
    }
  }
}
</style>
