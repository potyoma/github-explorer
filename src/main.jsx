import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </React.StrictMode>
)
