import { Button, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './button-color-variants.css'

const states = ['Default', 'Hover', 'Pressed', 'Disabled'] as const

export function ButtonColorVariants() {
  const capture = new URLSearchParams(window.location.search).get('capture')

  return (
    <main className={capture ? 'button-states button-states-capture' : 'button-states'}>
      {(['filled', 'subtle'] as const).flatMap((variant) =>
        (['light', 'dark'] as const)
          .filter((scheme) => !capture || capture === `${variant}-${scheme}`)
          .map((scheme) => (
            <MantineProvider
              key={`${variant}-${scheme}`}
              forceColorScheme={scheme}
              cssVariablesSelector={`#button-${variant}-${scheme}`}
            >
              <section
                id={`button-${variant}-${scheme}`}
                data-mantine-color-scheme={scheme}
                className={`button-state-strip button-state-strip-${scheme}`}
                aria-label={`Button ${variant}, ${scheme}`}
              >
                {states.map((state) => (
                  <Button
                    key={state}
                    className="state-button"
                    data-state={state.toLowerCase()}
                    aria-label={`${variant} ${scheme} ${state}`}
                    color="blue"
                    variant={variant}
                    size="sm"
                    disabled={state === 'Disabled'}
                  >
                    Button
                  </Button>
                ))}
              </section>
            </MantineProvider>
          )),
      )}
    </main>
  )
}
