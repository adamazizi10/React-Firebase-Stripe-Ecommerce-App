import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { CategoriesProvider } from './contexts/products/categories.provider.jsx'
import { CartProvider } from './contexts/cart/cart.provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
