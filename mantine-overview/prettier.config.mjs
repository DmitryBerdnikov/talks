export default {
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  printWidth: 100,
  proseWrap: 'preserve',
  overrides: [
    {
      files: ['slides.md', 'slides/**/index.md'],
      options: {
        parser: 'slidev',
        plugins: ['prettier-plugin-slidev', 'prettier-plugin-markdown-html'],
      },
    },
  ],
}
