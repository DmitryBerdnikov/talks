---
layout: print-detail
printPoster: true
class: print-rest-questions
---

# <span class="print-ink-text">Спасибо!</span>

<p class="closing-question"><span class="print-ink-text">Вопросы?</span></p>

<a class="closing-qr" href="https://t.me/berdnikovdima" target="_blank" rel="noopener noreferrer">
  <img src="./telegram-qr.png" alt="Telegram @berdnikovdima" />
</a>

<style>
  .slidev-layout.print-detail.print-rest-questions :deep(.print-content) {
    justify-content: center;
  }
  .slidev-layout.print-detail.print-rest-questions :deep(h1) {
    font-size: var(--font-size-display);
    max-width: 950px;
    letter-spacing: -0.04em;
  }
  .slidev-layout.print-detail.print-rest-questions :deep(.closing-question) {
    color: var(--color-text-muted);
    font-size: var(--font-size-heading-sm);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.04;
  }
  .slidev-layout.print-detail.print-rest-questions :deep(.closing-qr) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 320px;
    height: auto;
    padding: 12px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 8px 24px rgb(36 39 53 / 8%);
    box-sizing: border-box;
    overflow: hidden;
  }
  .slidev-layout.print-detail.print-rest-questions :deep(.closing-qr img) {
    display: block;
    width: 100%;
    height: auto;
    filter: brightness(0);
    opacity: 0.72;
  }
</style>
