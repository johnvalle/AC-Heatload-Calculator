module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  trailingComma: 'none',
  printWidth: 120,
  singleQuote: true,
  importOrderSeparation: true,
  importOrder: ['^@core/(.*)$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  plugins: ['@trivago/prettier-plugin-sort-imports'] // for non npm -> pnpm, bun
};
