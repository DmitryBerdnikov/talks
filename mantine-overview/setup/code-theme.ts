// A single palette keeps every syntax color intact when a line is highlighted.
const palette = {
  background: 'var(--color-code-background)',
  foreground: 'var(--color-code-text)',
  comment: 'var(--color-code-comment)',
  punctuation: 'var(--color-code-punctuation)',
  keyword: 'var(--color-code-keyword)',
  string: 'var(--color-code-string)',
  constant: 'var(--color-code-constant)',
  function: 'var(--color-code-function)',
  type: 'var(--color-code-tag)',
  property: 'var(--color-code-attribute)',
  selector: 'var(--color-code-selector)',
  htmlString: 'var(--color-code-html-string)',
}

export default {
  name: 'ink-studio',
  displayName: 'Tokyo Night',
  type: 'dark' as const,
  colors: {
    'editor.background': palette.background,
    'editor.foreground': palette.foreground,
  },
  tokenColors: [
    { scope: 'comment', settings: { foreground: palette.comment } },
    { scope: 'punctuation', settings: { foreground: palette.punctuation } },
    { scope: ['keyword', 'storage'], settings: { foreground: palette.keyword } },
    { scope: 'keyword.operator', settings: { foreground: palette.punctuation } },
    { scope: 'string', settings: { foreground: palette.string } },
    {
      scope: ['constant', 'support.constant'],
      settings: { foreground: palette.constant },
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: palette.function },
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class', 'entity.name.tag'],
      settings: { foreground: palette.type },
    },
    {
      scope: ['entity.other.attribute-name', 'variable.other.property', 'meta.object-literal.key'],
      settings: { foreground: palette.property },
    },
    // Keep CSS selectors, property names and values distinct, including custom properties.
    {
      scope: [
        'entity.name.tag.css',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css',
      ],
      settings: { foreground: palette.selector, fontStyle: 'italic' },
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-element.css',
        'entity.other.attribute-name.pseudo-class.css',
      ],
      settings: { foreground: palette.keyword },
    },
    {
      scope: ['support.type.property-name.css', 'variable.css'],
      settings: { foreground: palette.property },
    },
    {
      scope: ['support.constant.property-value.css', 'support.constant.font-name.css'],
      settings: { foreground: palette.string },
    },
    {
      scope: ['constant.numeric.css', 'constant.other.color.css', 'keyword.other.unit.css'],
      settings: { foreground: palette.constant },
    },
    {
      scope: 'variable.argument.css',
      settings: { foreground: palette.property },
    },
    {
      scope: [
        'support.type.property-name.media.css',
        'support.type.vendored.property-name.media.css',
      ],
      settings: { foreground: palette.type },
    },
    {
      scope: 'entity.other.attribute-name.html',
      settings: { foreground: palette.selector, fontStyle: 'italic' },
    },
    {
      scope: ['string.quoted.double.html', 'string.quoted.single.html'],
      settings: { foreground: palette.htmlString },
    },
  ],
}
