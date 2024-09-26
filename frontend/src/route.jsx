import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import { lazy } from 'react'
const NotFound = lazy(()=> import('./pages/NotFound.jsx'))
const ErrorScreen = lazy(()=> import('./pages/ErrorScreen.jsx'))
const HomePage = lazy(() => import( './pages/HomePage.jsx'))
const SignInPage = lazy(() => import( './pages/SignInPage.jsx'))
const ProfilePage = lazy(() => import( './pages/ProfilePage.jsx'))
const MyArticlePage = lazy(() => import( './pages/MyArticlePage.jsx'))
const PrivatePages = lazy(() => import( './middlewares/PrivatePages.jsx'))
const SignUpPage = lazy(() => import( './pages/SignUpPage.jsx'))

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} errorElement={<ErrorScreen/>} >
            <Route index path='/' element={<SignUpPage/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/' element={<PrivatePages/>}>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/my-contributions' element={<MyArticlePage/>} />
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    )
)

export default routes;