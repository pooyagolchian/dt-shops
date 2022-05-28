# DT Shops products

This project has been developed with the last version of Nuxt.js
- Vue.js/Nuxt.js
- Javascript, axios
- Cypress for E2E
- Prettier, ESLint, Husky
- Netlify and GithubAction for CI/CD automate testing

---


## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all the dependencies that are needed for developing.

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.


### `yarn cypress open`

Cypress is a next-generation front-end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.
This command has been used to run the E2E test with Cypress. I have used cypress for E2E and mock data.

### `yarn build`

- This command builds the DT SHOPS application for production.

### `yarn format`

- This command formats all files with Prettier.

---


### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of the formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by adding a pre-commit hook. For more detail check package.json, husky section.

### Husky

Modern native Git hooks made easy. Husky is used for git hook pre-commit to format all code with Prettier.

## Cypress E2E

`yarn cypress open`

---

### GitHub actions for automated testing

I have used GitHub actions for automated testing and run all Unit Test.



---


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
