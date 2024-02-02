/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  jsxBracketSameLine: true,
  semi: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    // External Modules
    '^react',
    '^next',
    '<THIRD_PARTY_MODULES>',
    // Internal Modules
    '^@public/*',
    '^@/app/(.*)$',
    '^@/interface/(.*)$',
    '^@/utils/(.*)$',
    '^@/states/(.*)$',
    '^@/hooks/(.*)$',
    '(?=content|api)',
    '^@/api/(.*)$',
    '^@/mock/(.*)$',
    '^@/config(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/(.*)$',
    '^@/assets/(.*)$',
    '.svg',
    // Relative Paths
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '^../.*(?<!\\.(c|le|sc)ss)$',
    // Styles
    '^(?!.*\\.module\\.).(css|scss|less)$',
    '(?=./*.module.scss)',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

module.exports = config;
