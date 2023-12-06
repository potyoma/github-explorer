import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envDir: './',
    server: {
        proxy: {
            '/api/github': {
                target: 'https://api.github.com',
                rewrite: (path) => path.replace('api/github', ''),
                changeOrigin: true,
                secure: false,
                ws: true,
                preserveHeaderKeyCase: true,
            },
        },
    },
})
