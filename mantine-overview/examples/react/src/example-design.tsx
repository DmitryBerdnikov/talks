import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DefaultUsersPage } from './pages/examples/users-table/default-users-page'
import { CustomUsersPage } from './pages/examples/users-table/custom-users-page'
import { FeedbackPage } from './pages/examples/feedback-page'
import { ProductPage } from './pages/examples/product-page'
import { CardPage } from './pages/card-page-css-modules'
import { CardPage as CardPageClassnames } from './pages/card-page-css-modules-classnames'
import { CardPage as CardPageButton } from './pages/card-page-button'
import { CardPage as CardPageStyleProps } from './pages/card-page-style-props'

export function ExampleDesign() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/examples/users" element={<DefaultUsersPage />} />
        <Route path="/examples/users-custom" element={<CustomUsersPage />} />
        <Route path="/examples/feedback" element={<FeedbackPage />} />
        <Route path="/examples/product" element={<ProductPage />} />
        <Route path="/examples/card" element={<CardPage />} />
        <Route path="/examples/card-classnames" element={<CardPageClassnames />} />
        <Route path="/examples/card-button" element={<CardPageButton />} />
        <Route path="examples/card-style-props" element={<CardPageStyleProps />} />
      </Routes>
    </BrowserRouter>
  )
}
