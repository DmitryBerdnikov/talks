import { useState } from 'react'
import { Grid } from '@mantine/core'
import '../grid-page.css'

const image = (id: string, width = 1200, height = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`

const sections = [
  {
    number: '01',
    label: 'Layout as language',
    title: 'Дизайн, который держит форму.',
    copy: '12 колонок помогают собирать выразительные страницы без хаоса. Каждый блок знает своё место — от одного маркера до широкого изображения.',
    image: image('photo-1518005020951-eccb494ad742'),
  },
  {
    number: '02',
    label: 'Editorial rhythm',
    title: 'Ритм начинается с ширины.',
    copy: 'Узкий текст читается спокойно, а визуальные акценты могут вырваться за его пределы. Сетка связывает всё в одну композицию.',
    image: image('photo-1497366754035-f200968a6e72', 1400, 1000),
  },
  {
    number: '03',
    label: 'Built to flex',
    title: 'Одна система. Много масштабов.',
    copy: 'На большом экране — точные пропорции. На маленьком — та же иерархия, собранная в одну колонку. Без отдельных макетов.',
    image: image('photo-1497366811353-6870744d04b2', 1400, 1000),
  },
]

export function GridPage() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="grid-demo">
      <header className="grid-nav">
        <Grid columns={12} gap={16} align="center">
          <Grid.Col span={3}>
            <a className="grid-logo" href="/">
              field<span>_</span>notes
            </a>
          </Grid.Col>
          <Grid.Col span={4} offset={1}>
            <nav aria-label="Landing navigation">
              {['Overview', 'Principles', 'Contact'].map((item) => (
                <button
                  className={active === item ? 'is-active' : ''}
                  key={item}
                  onClick={() => setActive(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </Grid.Col>
          <Grid.Col span={2} offset={2}>
            <button className="grid-menu" aria-label="Open menu">
              Menu <span>↗</span>
            </button>
          </Grid.Col>
        </Grid>
      </header>

      <div className="grid-guides" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index}>{String(index + 1).padStart(2, '0')}</span>
        ))}
      </div>

      <main>
        <section className="grid-hero">
          <div className="grid-kicker">
            <span className="grid-dot" /> A practical guide to CSS Grid{' '}
            <span className="grid-rule" />
          </div>
          <h1>
            Make space
            <br />
            <em>for ideas.</em>
          </h1>
          <div className="grid-hero-bottom">
            <p>
              Осознанная композиция
              <br />
              на 12 колонках.
            </p>
            <a className="grid-arrow" href="#principles">
              Scroll to explore <span>↓</span>
            </a>
          </div>
          <Grid columns={12} gap={16} className="grid-hero-grid">
            <Grid.Col span={5} offset={7} className="grid-hero-image">
              <img
                src={image('photo-1524758631624-e2822e304c36', 1200, 1000)}
                alt="Светлое рабочее пространство"
              />
              <span className="grid-caption">01 / The open plan</span>
            </Grid.Col>
          </Grid>
        </section>

        <section className="grid-intro" id="principles">
          <Grid columns={12} gap={16}>
            <Grid.Col span={2}>
              <p className="grid-section-label">[ 02 — Principles ]</p>
            </Grid.Col>
            <Grid.Col span={8} offset={1}>
              <h2>
                Сетка — это не клетка.
                <br />
                <span>Это общий язык для изображения, текста и пустоты.</span>
              </h2>
            </Grid.Col>
          </Grid>
        </section>

        <section className="grid-statement">
          <Grid columns={12} gap={16}>
            <Grid.Col span={2}>
              <div className="grid-statement-number">12</div>
            </Grid.Col>
            <Grid.Col span={5} offset={1}>
              <div className="grid-statement-copy">
                <p className="grid-section-label">[ The system ]</p>
                <p>
                  Каждая колонка — маленькое решение. Вместе они дают масштаб, паузу и направление
                  взгляду.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={3} offset={1}>
              <div className="grid-statement-note">
                margin
                <br />/ 24 px
                <br />
                gap / 16 px
              </div>
            </Grid.Col>
          </Grid>
        </section>

        {sections.map((section, index) => (
          <section
            className={`grid-feature ${index % 2 ? 'grid-feature-reverse' : ''}`}
            key={section.number}
          >
            <Grid columns={12} gap={16} className="grid-feature-grid">
              <Grid.Col
                span={7}
                offset={index % 2 ? 5 : 0}
                order={{ base: 1, sm: index % 2 ? 2 : 1 }}
              >
                <div className="grid-feature-image">
                  <img src={section.image} alt="" />
                  <span className="grid-caption">
                    {section.number} / {section.label}
                  </span>
                </div>
              </Grid.Col>
              <Grid.Col
                span={4}
                offset={index % 2 ? 1 : 1}
                order={{ base: 2, sm: index % 2 ? 1 : 2 }}
              >
                <div className="grid-feature-copy">
                  <p className="grid-section-label">[ {section.number} ]</p>
                  <h2>{section.title}</h2>
                  <p>{section.copy}</p>
                  <span className="grid-span-tag">image: 7 cols / copy: 4 cols</span>
                </div>
              </Grid.Col>
            </Grid>
          </section>
        ))}

        <section className="grid-cta" id="contact">
          <Grid columns={12} gap={16}>
            <Grid.Col span={2}>
              <p className="grid-section-label">[ 06 — Keep going ]</p>
            </Grid.Col>
            <Grid.Col span={8} offset={1}>
              <h2>
                Соберите свою
                <br />
                <em>следующую страницу.</em>
              </h2>
            </Grid.Col>
            <Grid.Col span={3} offset={1}>
              <a className="grid-cta-button" href="mailto:hello@example.com">
                Start a project <span>↗</span>
              </a>
            </Grid.Col>
          </Grid>
        </section>
      </main>
      <footer className="grid-footer">
        <span>field_notes / 2024</span>
        <span>12 columns, infinite possibilities</span>
        <span>made with intention ↗</span>
      </footer>
    </div>
  )
}
