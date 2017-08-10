module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    mocha: true,
  },
  extends: 'standard',
  plugins: [
    'html',
    'import'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    }
  },
  rules: {
    'space-before-function-paren': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}