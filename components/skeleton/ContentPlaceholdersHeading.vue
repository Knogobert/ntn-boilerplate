<template>
  <div :class="className">
    <div v-if="img" :class="`${className}__img`"></div>
    <div :class="`${className}__content`">
      <div :class="`${className}__title`"></div>
      <div :class="`${className}__subtitle`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-placeholders-heading',
  data() {
    return {
      className: 'content-placeholders-heading',
    }
  },
  props: {
    img: {
      type: Boolean,
      default: false,
    },
  },
}
</script>