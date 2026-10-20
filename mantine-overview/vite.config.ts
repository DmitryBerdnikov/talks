import { existsSync } from 'node:fs'

export default {
  plugins: [
    {
      name: 'slidev-code-css-compatibility',
      enforce: 'pre' as const,
      transform(code: string, id: string) {
        if (!id.replaceAll('\\', '/').endsWith('/@slidev/client/styles/code.css')) return
        // UnoCSS 66.10 повреждает CSS при раскрытии этих встроенных директив Slidev.
        const lineNumbers = '--uno: w-4 mr-6 text-gray-400 dark-text-gray-600;'
        const hasLineNumbers = code.includes(lineNumbers)
        const css = code
          .replace('&:-webkit-scrollbar', '&::-webkit-scrollbar')
          .replace(lineNumbers, 'width: 1rem; margin-right: 1.5rem; color: rgb(156 163 175);')
          .replace(
            '--uno: font-light py-0.5 px-1.5;',
            'font-weight: 300; padding: 0.125rem 0.375rem;',
          )
        return (
          css +
          (hasLineNumbers
            ? '\n.dark .slidev-code-line-numbers .slidev-code code .line::before { color: rgb(75 85 99); }\n'
            : '')
        )
      },
    },
    {
      name: 'decode-local-file-paths',
      enforce: 'pre' as const,
      resolveId(id: string) {
        if (!id.includes('%')) return
        const decoded = decodeURI(id).replace(/^\/@fs\//, '/')
        if (decoded !== id && existsSync(decoded)) return decoded
      },
    },
  ],
}
