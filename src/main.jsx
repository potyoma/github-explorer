import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Layout from './Layout'
import NotFound from './pages/not-found'
import router from "./router"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </React.StrictMode>
)
