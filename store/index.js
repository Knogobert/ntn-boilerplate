import { SET_BLOG_POSTS, SET_PROJECT_POSTS } from './mutations.type'

export const state = () => ({
  blogPosts: [],
  projectPosts: []
})

export const mutations = {
  [SET_BLOG_POSTS](state, list) {
    state.blogPosts = list
  },
  [SET_PROJECT_POSTS](state, list) {
    state.projectPosts = list
  }
}

export const actions = {
  getPosts(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  async nuxtServerInit({ commit }) {
    // Blog collection type
    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/)
    await commit(SET_BLOG_POSTS, actions.getPosts(blogFiles))

    // Project collection type
    let projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/)
    await commit(SET_PROJECT_POSTS, actions.getPosts(projectFiles))

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
