module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // './.eslintrc-auto-import.json'
  ],
  overrides: [{
    env: {
      node: true
    },
    files: [
      '.eslintrc.{js,cjs}'
    ],
    parserOptions: {
      sourceType: 'script'
    }
  },
  {
    files: ['src/**/pages/**/*.vue'], // Change this to default.vue path
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
    // project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}