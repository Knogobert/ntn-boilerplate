<template>
  <div>
    <div v-if="pending" class="cards">
      <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
        <SkeletonContentPlaceholders :rounded="true" :class="placeholder">
          <SkeletonContentPlaceholdersHeading />
        </SkeletonContentPlaceholders>
      </div>
    </div>
    <ul v-else-if="posts?.length > 0" class="cards">
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="post._path" class="card card--clickable">
          <template v-if="postType === 'projects'">
            <span class="flex-1">
              <h6 class="inline-block py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category
                }}</h6>
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="mt-2">{{ post.description }}</p>
            </span>
            <img v-if="post.cover" class="cover-image" :src="post.cover">
          </template>

          <template v-else>
            <span class="w-full">
              <span class="flex justify-between align-baseline">
                <h3 class="card-title">{{ post.title }}</h3>
                <h6 v-if="post.createdAt"
                  class="self-start inline-block mt-0 py-1 px-2 bg-gray text-white text-base font-medium rounded-sm whitespace-no-wrap">
                  {{ useFormatDate(post.createdAt) }}
                </h6>
              </span>
              <p class="mt-2">{{ post.description }}</p>
            </span>
          </template>
        </nuxt-link>
      </li>
    </ul>
    <p v-else class="max-w-5xl mx-auto">
      {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  postType: {
    type: String,
    default: 'blog',
    validator: (val) => ['blog', 'projects'].includes(val),
  },
  amount: { // ? https://content.nuxtjs.org/fetching#limitn
    type: Number,
    default: 10,
    validator: (val) => val >= 0 && val < 100,
  },
  sortBy: { // ? https://content.nuxtjs.org/fetching#sortbykey-direction
    type: Object,
    default: () => ({
      key: 'slug',
      direction: 1 // you may want `-1` here
    }),
    validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'number',
  }
})

const { data: posts, pending, refresh, error } = await useLazyAsyncData(
  `${props.postType}-list`,
  () => markRaw(
    queryContent(`/${props.postType}`)
      .sort({ [props.sortBy.key]: props.sortBy.direction })
    .limit(props.amount)
    .find()
    .catch((err) => console.error(err) || [])
  )
)

const placeholderClasses = computed(() => {
  const classes = ['w-full','w-2/3','w-5/6'];
  return [...Array.from({ length: props.amount }, (v, i) => classes[i % classes.length])]; // repeats classes after one another
});

// const storedPosts = () => useState(`stored-${props.postType}-list`)
// const storedPosts = useState(`${props.postType}-list`);
// if (error._value) showError({ message: "Blog posts not found", cause: error });
</script>
