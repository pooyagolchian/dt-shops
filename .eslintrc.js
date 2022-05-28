module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:cypress/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/require-prop-types': 0,
    'vue/no-v-html': 0,
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: false,
      },
    ],
  },
}
