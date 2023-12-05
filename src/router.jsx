import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/not-found/not-found'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home />}>
            <Route errorElement={<NotFound />}>
                <Route path=':username' element={<></>}></Route>
                <Route path='repositories/:username' element={<></>}></Route>
            </Route>
        </Route>
    )
)

export default router
