import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/not-found/not-found'
import Profile from './pages/profile'
import StarredRepositories from './pages/starred-repositories'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<NotFound />}>
            <Route errorElement={<NotFound />}>
                <Route index element={<Home />}></Route>
                <Route path='error' element={<NotFound />}></Route>
                <Route path=':username' element={<Profile />}></Route>
                <Route path='starred/:username' element={<StarredRepositories />}></Route>
            </Route>
        </Route>
    )
)

export default router
