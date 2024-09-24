import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import SignUpPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import PrivatePages from './middlewares/PrivatePages';
import ProfilePage from './pages/ProfilePage';
import MyArticlePage from './pages/MyArticlePage';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index path='/' element={<SignUpPage/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/' element={<PrivatePages/>}>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/my-contributions' element={<MyArticlePage/>} />
            </Route>
        </Route>
    )
)

export default routes;