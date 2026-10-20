import { MantineProvider, Title } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { AreaChart } from '@mantine/charts'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/tiptap/styles.css'
import styles from './core-showcase.module.css'
import extensionStyles from './extensions-showcase.module.css'

// Demonstration values, unrelated to usage statistics.
const data = [
  { day: '1', React: 40, TypeScript: 70, 'CSS Modules': 30 },
  { day: '2', React: 65, TypeScript: 50, 'CSS Modules': 45 },
  { day: '3', React: 50, TypeScript: 80, 'CSS Modules': 35 },
  { day: '4', React: 85, TypeScript: 65, 'CSS Modules': 55 },
  { day: '5', React: 70, TypeScript: 95, 'CSS Modules': 40 },
  { day: '6', React: 100, TypeScript: 75, 'CSS Modules': 65 },
  { day: '7', React: 90, TypeScript: 110, 'CSS Modules': 50 },
]

// Author's wording from knowledge-base/Доклады/mantine/mantine.md.
const content = `
<h3>Mantine</h3>
<p><strong>TypeScript</strong> и <em>CSS Modules</em></p>
<ul>
<li>Гибкая кастомизация</li>
<li>Mobile-first</li>
<li>Доступность (ARIA, клавиатурная навигация)</li>
</ul>
`

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    shouldRerenderOnTransaction: true,
    content,
  })

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.Blockquote />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Hr />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  )
}

export function ExtensionsShowcase() {
  return (
    <MantineProvider forceColorScheme="light">
      <main className={styles.showcase}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Title order={3} id="dates-heading">
              @mantine/dates
            </Title>
            <section aria-labelledby="dates-heading" className={extensionStyles.centered}>
              <DatePicker defaultDate="2026-12-10" defaultValue="2026-12-10" />
            </section>
          </div>
          <div className={styles.column}>
            <Title order={3} id="charts-heading">
              @mantine/charts
            </Title>
            <section aria-labelledby="charts-heading" className={extensionStyles.centered}>
              <AreaChart
                w="100%"
                yAxisProps={{ width: 36 }}
                areaChartProps={{
                  margin: { left: 0, right: 0, top: 10, bottom: 0 },
                }}
                h={300}
                data={data}
                dataKey="day"
                series={[
                  { name: 'React', color: 'blue.6' },
                  { name: 'TypeScript', color: 'indigo.6' },
                  { name: 'CSS Modules', color: 'teal.6' },
                ]}
              />
            </section>
          </div>
          <div className={styles.column}>
            <Title order={3} id="tiptap-heading">
              @mantine/tiptap
            </Title>
            <section aria-labelledby="tiptap-heading">
              <Editor />
            </section>
          </div>
        </div>
      </main>
    </MantineProvider>
  )
}
