import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx',
        app: 'src/App.jsx',
        home: 'src/pages/Home.jsx',
        product: 'src/product/product.jsx',
        login: 'src/component/login/login.jsx',
        signup: 'src/component/signup/signup.jsx',
        singleView: 'src/component/single-product-view/singleView.jsx',
        admin: 'src/admin-section/admin.jsx'
      }
    }
  }
})
