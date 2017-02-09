module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'flowtype'
  ],
  // add your custom rules here
  'rules': {
    "no-useless-escape": 0,
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
