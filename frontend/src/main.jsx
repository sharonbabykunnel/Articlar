import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './route'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './redux/appStore'

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
  </Provider>
)
