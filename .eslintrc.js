module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-unexpected-multiline': 'error',
    'no-console': 'off',
  },
};
