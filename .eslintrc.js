module.exports = {
  extends: [
    '@justichentai/eslint-config/basic',
    '@justichentai/eslint-config/typescript',
    '@justichentai/eslint-config/vue3',
  ],
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
