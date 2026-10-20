import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

// Each demo keeps its own provider and styles, just as in the original examples.
const CoreShowcase = lazy(() =>
  import('./slides/core-showcase').then((m) => ({ default: m.CoreShowcase })),
)
const LayoutShowcase = lazy(() =>
  import('./slides/layout-showcase').then((m) => ({ default: m.LayoutShowcase })),
)
const ExtensionsShowcase = lazy(() =>
  import('./slides/extensions-showcase').then((m) => ({ default: m.ExtensionsShowcase })),
)
const CustomizationShowcase = lazy(() =>
  import('./slides/customization-showcase').then((m) => ({ default: m.CustomizationShowcase })),
)
const Styling = lazy(() =>
  import('./components-styling/app').then((m) => ({ default: m.ComponentsStylingApp })),
)
const UsefulFeatures = lazy(() =>
  import('./useful-features/app').then((m) => ({ default: m.UsefulFeaturesApp })),
)
const DesignExamples = lazy(() => import('./slides/base-app').then((m) => ({ default: m.App })))
const Pages = lazy(() => import('./pages/app').then((m) => ({ default: m.PagesApp })))
const Index = lazy(() => import('./examples-index'))
const ButtonColorVariants = lazy(() =>
  import('./slides/button-color-variants').then((m) => ({ default: m.ButtonColorVariants })),
)
const BrandColorButtons = lazy(() =>
  import('./slides/brand-color-buttons').then((m) => ({ default: m.BrandColorButtons })),
)

const ColorUsageCapture = lazy(() =>
  import('./slides/color-usage-capture').then((m) => ({ default: m.ColorUsageCapture })),
)

const InputPropsCapture = lazy(() =>
  import('./slides/input-props-capture').then((m) => ({ default: m.InputPropsCapture })),
)
const InputStylesApiCapture = lazy(() =>
  import('./slides/input-styles-api-capture').then((m) => ({ default: m.InputStylesApiCapture })),
)
const InputThemeCapture = lazy(() =>
  import('./slides/input-theme-capture').then((m) => ({ default: m.InputThemeCapture })),
)

const UsefulFeaturesCapture = lazy(() =>
  import('./slides/useful-features-capture').then((m) => ({ default: m.UsefulFeaturesCapture })),
)

const InputDataAttributesCapture = lazy(() =>
  import('./slides/input-data-attributes-capture').then((m) => ({
    default: m.InputDataAttributesCapture,
  })),
)

const path = window.location.pathname.replace(/\/$/, '') || '/'
const stylingPaths = [
  '/input-base',
  '/input-with-props',
  '/input-anatonomy',
  '/input-styles-api',
  '/input-data-attribute',
  '/input-style-props',
]
const pagePaths = ['/base', '/test-form', '/team-form', '/schema-sync', '/container', '/grid']
const screen =
  path === '/color-usage-capture' ? (
    <ColorUsageCapture />
  ) : path === '/input-data-attributes-capture' ? (
    <InputDataAttributesCapture />
  ) : path === '/useful-features-capture' ? (
    <UsefulFeaturesCapture />
  ) : path === '/input-theme-capture' ? (
    <InputThemeCapture />
  ) : path === '/input-styles-api-capture' ? (
    <InputStylesApiCapture />
  ) : path === '/input-props-capture' ? (
    <InputPropsCapture />
  ) : path === '/brand-color-buttons' ? (
    <BrandColorButtons />
  ) : path === '/button-color-variants' ? (
    <ButtonColorVariants />
  ) : path === '/core-showcase' ? (
    <CoreShowcase />
  ) : path === '/layout-showcase' ? (
    <LayoutShowcase />
  ) : path === '/extensions-showcase' ? (
    <ExtensionsShowcase />
  ) : path === '/customization-showcase' ? (
    <CustomizationShowcase />
  ) : stylingPaths.includes(path) ? (
    <Styling />
  ) : ['/polymorphic', '/custom-component'].includes(path) ? (
    <UsefulFeatures />
  ) : path.startsWith('/examples/') ? (
    <DesignExamples />
  ) : pagePaths.includes(path) ? (
    <Pages />
  ) : (
    <Index />
  )

createRoot(document.getElementById('root')!).render(<Suspense fallback={null}>{screen}</Suspense>)
