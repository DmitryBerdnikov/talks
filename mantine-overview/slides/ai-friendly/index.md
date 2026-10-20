---
layout: print-poster
printPoster: true
class: print-ai-friendly
---

<script setup>
  import DeckIcon from '../../components/DeckIcon.vue'
</script>

<h1><span class="print-ink-text">AI-friendly</span></h1>
<p class="ai-intro slide-subtitle">
  Документация в формате, удобном для LLM<br />и&nbsp;без лишней разметки сайта:
</p>

<!-- prettier-ignore -->
<div class="ai-grid">
  <section class="ai-item">
    <div class="ai-icon"><DeckIcon name="file" :size="26" /></div>
    <div>
      <h2><a href="https://mantine.dev/llms.txt"><span class="print-ink-text">llms.txt</span></a></h2>
      <p>Навигация по документации</p>
    </div>
  </section>
  <section class="ai-item">
    <div class="ai-icon"><DeckIcon name="layers" :size="26" /></div>
    <div>
      <h2><a href="https://mantine.dev/llms-full.txt"><span class="print-ink-text">llms-full.txt</span></a></h2>
      <p>Полная документация в одном файле</p>
    </div>
  </section>
  <section class="ai-item">
    <div class="ai-icon"><DeckIcon name="search" :size="26" /></div>
    <div>
      <h2><a href="https://mantine.dev/guides/llms/#mcp-server"><span class="print-ink-text">MCP server</span></a></h2>
      <p>Поиск документации, props и API</p>
    </div>
  </section>
  <section class="ai-item">
    <div class="ai-icon"><DeckIcon name="code" :size="26" /></div>
    <div>
      <h2><a href="https://github.com/mantinedev/skills"><span class="print-ink-text">Skills</span></a></h2>
      <p>Готовые инструкции для форм, Combobox и custom components</p>
    </div>
  </section>
</div>

<style>
  .slidev-layout.print-ai-friendly h1 {
    color: var(--color-text);
  }
  .print-ai-friendly .ai-intro {
    max-width: 900px;
    margin-top: 24px;
    font-size: var(--font-size-md);
    font-weight: 500;
  }
  .print-ai-friendly .ai-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, 164px);
    gap: 18px 24px;
    margin-top: 28px;
  }
  .print-ai-friendly .ai-item {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    align-items: start;
    gap: 20px;
    padding: 20px;
    border: 1px solid var(--color-border-primary);
    border-radius: 14px;
    color: var(--color-text-muted);
  }
  .print-ai-friendly .ai-icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    color: var(--color-icon-blue);
    background: var(--color-icon-blue-background);
  }
  .print-ai-friendly .ai-item h2 {
    color: var(--color-primary);
    font-size: var(--font-size-xl);
    font-weight: 850;
    line-height: 1.1;
    letter-spacing: -0.035em;
  }
  .print-ai-friendly .ai-item a {
    color: inherit;
    text-decoration: none;
  }
  .print-ai-friendly .ai-item p {
    margin-top: 12px;
    font-size: var(--font-size-sm);
    line-height: 1.25;
  }
</style>
