import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './component/login/login'
import Signup from './component/signup/signup'
import Products from './product/product'
import Single from './component/single-product-view/singleView'
import Admin from './admin-section/admin'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/single' element={<Single/>}/>
      <Route path='/admin' element={<Admin/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App 
