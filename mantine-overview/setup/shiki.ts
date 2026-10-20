import { defineShikiSetup } from '@slidev/types'
import codeTheme from './code-theme'

export default defineShikiSetup(() => ({
  langs: [
    {
      name: 'css-font-stack',
      scopeName: 'source.css-font-stack',
      patterns: [
        { name: 'support.type.property-name.css', match: '--[a-zA-Z-]+(?=\\s*:)' },
        { name: 'punctuation.css', match: '[:,;]' },
        {
          name: 'support.constant.font-name.css',
          match: '[-a-zA-Z][a-zA-Z0-9-]*(?: [a-zA-Z][a-zA-Z0-9-]*)*',
        },
      ],
    },
    {
      name: 'mantine-css',
      scopeName: 'source.mantine-css',
      patterns: [
        { name: 'comment.line.double-slash.css', match: '//.*$' },
        { name: 'support.function.css', match: '\\b(?:rem|em)(?=\\()' },
        { name: 'constant.numeric.css', match: '\\b[0-9]+(?:\\.[0-9]+)?' },
        { name: 'keyword.other.unit.css', match: '\\b(?:px|rem|em)\\b|(?<=[0-9])(?:px|rem|em)\\b' },
        { name: 'punctuation.css', match: '[();]' },
      ],
    },
  ],
  // The same bright syntax palette stays active on both canvases and every click step.
  themes: {
    light: codeTheme,
    dark: codeTheme,
  },
}))
