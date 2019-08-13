module.exports = exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['mocha', 'chai-expect'],
  rules: {
    'comma-dangle': 0,
    'implicit-arrow-linebreak': ['error', 'below'],
    'mocha/no-exclusive-tests': 'error',
    'chai-expect/missing-assertion': 2,
    'chai-expect/terminating-properties': 1
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'no-unused-expressions': 0
      }
    }
  ]
};
