import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    typescript: true,
  },
  {
    files: ['test/**/*.mjs'],
    rules: {
      'antfu/no-import-dist': 'off',
      'antfu/no-import-node-test': 'off',
      'no-new': 'off',
    },
  },
)
