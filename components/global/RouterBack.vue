<template>
  <nuxt-link @click.native="to ? null : $router.go(-2)" :to="to ? to : '/'">
    <svg width="38" height="8" viewBox="0 0 38 8" xmlns="http://www.w3.org/2000/svg" class="inline">
      <path d="M0.646446 3.64644C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976308 4.7308 0.659725 4.53553 0.464463C4.34027 0.269201 4.02369 0.269201 3.82843 0.464463L0.646446 3.64644ZM38 3.5L1 3.5L1 4.5L38 4.5L38 3.5Z" fill="currentColor"/>
    </svg>
    <slot>go back</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { // ? Override with a path instead of router back
      type: String,
      default: '',
    },
  },
}
</script>