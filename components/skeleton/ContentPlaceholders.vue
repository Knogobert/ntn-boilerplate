<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
// Original source: https://github.com/michalsnik/vue-content-placeholders/
// Updated to work with nuxt 3 and translated to postcss instead of scss
export default {
  name: 'content-placeholders',
  computed: {
    classObject() {
      return {
        'content-placeholders': true,
        'content-placeholders-is-rounded': this.rounded,
        'content-placeholders-is-centered': this.centered,
        'content-placeholders-is-animated': this.animated,
      }
    },
  },
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="pcss">
/* Variables */
.content-placeholders {
  --content-placeholders-primary-color: #ccc;
  --content-placeholders-secondary-color: #eee;
  --content-placeholders-secondary-color-darker: #d1d1d1;
  --content-placeholders-border-radius: 6px;
  --content-placeholders-line-height: 15px;
  --content-placeholders-spacing: 10px;
}

/* Animations */
@keyframes ContentPlaceholdersAnimation {
  0% { transform: translate3d(-30%, 0, 0); }
  100% { transform: translate3d(100%, 0, 0); }
}

/* Styles */
.content-placeholders-heading,
.content-placeholders-text,
.content-placeholders-img {
  & [class^="content-placeholders-"] {
    & + .content-placeholders-heading,
    & + .content-placeholders-text,
    & + .content-placeholders-img {
      margin-top: calc(2 * var(--content-placeholders-spacing));
    }
  }
}

.content-placeholders-heading {
  display: flex;

  & .content-placeholders-heading__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  & .content-placeholders-heading__title {
    position: relative;
    overflow: hidden;
    height: var(--content-placeholders-line-height);
    background: var(--content-placeholders-secondary-color);
    width: 85%;
    margin-bottom: var(--content-placeholders-spacing);
    background: var(--content-placeholders-primary-color);
  }

  & .content-placeholders-heading__subtitle {
    position: relative;
    overflow: hidden;
    height: var(--content-placeholders-line-height);
    background: var(--content-placeholders-secondary-color);
    width: 90%;
  }

  & .content-placeholders-heading__img {
    position: relative;
    overflow: hidden;
    height: var(--content-placeholders-line-height);
    background: var(--content-placeholders-secondary-color);
    width: calc(2 * var(--content-placeholders-line-height) + 3 * var(--content-placeholders-spacing));
    height: calc(2 * var(--content-placeholders-line-height) + 3 * var(--content-placeholders-spacing));
    margin-right: calc(1.5 * var(--content-placeholders-spacing));
  }
}

.content-placeholders-text {
  & .content-placeholders-text__line {
    position: relative;
    overflow: hidden;
    height: var(--content-placeholders-line-height);
    background: var(--content-placeholders-secondary-color);
    width: 100%;
    margin-bottom: var(--content-placeholders-spacing);
  }

  &:nth-child(4n+1) { width: 80%; }
  &:nth-child(4n+2) { width: 100%; }
  &:nth-child(4n+3) { width: 70%; }
  &:nth-child(4n+4) { width: 85%; }
}

.content-placeholders-img {
  position: relative;
  overflow: hidden;
  height: var(--content-placeholders-line-height);
  background: var(--content-placeholders-secondary-color);
  width: 100%;
  height: 120px;
}

.content-placeholders-is-rounded {

  & .content-placeholders-heading .content-placeholders-heading__title,
  & .content-placeholders-heading .content-placeholders-heading__subtitle,
  & .content-placeholders-heading .content-placeholders-heading__img,
  & .content-placeholders-text .content-placeholders-text__line,
  & .content-placeholders-img {
    border-radius: var(--content-placeholders-border-radius);
  }
}

.content-placeholders-is-centered {

  & .content-placeholders-heading .content-placeholders-heading__title,
  & .content-placeholders-heading .content-placeholders-heading__subtitle,
  & .content-placeholders-heading .content-placeholders-heading__img,
  & .content-placeholders-text .content-placeholders-text__line,
  & .content-placeholders-img {
    margin-left: auto;
    margin-right: auto;
  }
}

.content-placeholders-is-animated {

  & .content-placeholders-heading .content-placeholders-heading__title,
  & .content-placeholders-heading .content-placeholders-heading__subtitle,
  & .content-placeholders-heading .content-placeholders-heading__img,
  & .content-placeholders-text .content-placeholders-text__line,
  & .content-placeholders-img {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      max-width: 1000px;
      height: 100%;
      background: linear-gradient(to right, transparent 0%, var(--content-placeholders-secondary-color-darker) 15%, transparent 30%);
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: ContentPlaceholdersAnimation;
      animation-timing-function: linear;
    }
  }
}
</style>
