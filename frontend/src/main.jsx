import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './route'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './redux/appStore'

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={routes} />
    </Suspense>
  </Provider>
)
