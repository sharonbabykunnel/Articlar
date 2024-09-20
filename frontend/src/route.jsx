import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={App}>
            {/* <Route path='/home' element={}/> */}
        </Route>
    )
)

export default routes;