# 🏗️ Boilerplate for Nuxt, Tailwind & NetlifyCMS

An opinionated starter template for a quick start with the following technologies up on a site after only 5 minutes!

## 🔋 Batteries included

- Vue 2
- Vuex
- Nuxt.js (in "universal mode", where both SEO and speed is great)
- PostCSS (no SCSS)
- Tailwind
- PurgeCSS (removes unused CSS-selectors)
- Dark mode & custom ColorModePicker (Set to "dark mode first")
- PWA (install website as standalone app)
- Netlify CMS (no need for a separate server)
- Git LFS (store uploaded images outside the main repo)
- Netlify LM (Netlify’s Git LFS support)
- Prettier

## 🎉 Getting Started

1. [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/knogobert/ntn-boilerplate)

2. Git clone the repo

3. Install git-lfs

---

### Personalize setup

1. Copy and change the .env-file

   - `cp .env-example .env`
   - Then change the values

2. Change the value on these lines

   - `static/admin/config.yml:1` — `site_url`
   - `static/admin/config.yml:2` — `logo_url`
   - `content/site/info.json` — `sitename`, `sitedescription` & `sitelang`
   - `package.json:1` — `name`, `description`, `author` & `repository.url`

3. Change colors, content & content collections

   - Colors are managed in `assets/scss/_vars.scss` & `tailwind.config.js`
   - Content is managed mainly in [local Netlify CMS](http://localhost:3000/admin) or by hand in `assets/content`
   - Content collections are managed in `static/admin/config.yml`, then added to vuex store in `store/index.js`

### Setup Netlify

#### Identity

Make sure to set to registration only here:
Then when you create your first account, _don’t_ sign up using OAuth, generate a new password and sign in that way locally, otherwise a successful login will send you to the URL you typed in instead of keeping you on localhost.

---

1. 📦 Install dependencies.

```bash
npm install
```

2. 🏗 Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.

```bash
npm run dev
```

3. 🌌 Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).

```bash
npm run build

# And to serve that deployment...
npm run start
```

4. ⚡️ Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

```bash
npm run generate
```

> This project was bootstrapped with `create-nuxt-app`. There are more detailed explanations of how everything works in the [Nuxt.js docs](https://nuxtjs.org).

---

Originally based on [Henry Desroches' nuxt-netlify-cms-starter](https://github.com/xdesro/nuxt-netlify-cms-starter).

Deployed easily with the same boilerplate via:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xdesro/nuxt-netlify-cms-starter)

(Don’t forget to set the env var `GIT_LFS_ENABLED` to `true` on your netlify site for LFS to work)

---

## Troubleshooting

1. > I added a CSS class, but it doesn't show

   - It is most likely purged by PurgeCSS, make sure it is whitelisted in `purgeCSS` in `nuxt.config.js`

2. > This repository is configured for Git LFS but 'git-lfs' was not found on your path. If you no longer wish to use Git LFS, remove this hook by deleting .git/hooks/pre-push.

   - Install git-lfs, run `git lfs install` in project root
