module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    './rules/eslint.js',
    './rules/prettier.js',
    './rules/react.js',
    './rules/a11y.js',
    './rules/imports.js',

    // We need to make sure the prettier eslint configs
    // are last in this list so they overwrite any eslint
    // rules that might cause eslint to confict with prettiers
    // formatting.
    'prettier',
    'prettier/react',
  ],
};
