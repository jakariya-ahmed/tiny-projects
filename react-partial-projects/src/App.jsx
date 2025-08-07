import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/AboutPage'
import ProductAdd from './pages/dashboard/ProductAddPage'
import ViewProduct from './pages/dashboard/ViewProductPage';
import DashboardLayout from './pages/dashboard/DashboardLayout'
import HomeLayout from './pages/HomeLayout'
import Dashboard from './pages/dashboard/Dashboard'



function App() {

  return (
    <div className='min-h-screen bg-slate-700 pt-6'>
            <BrowserRouter>
                {/* Routes  */}
                <Routes>

                  {/* Home routes  */}
                  <Route path='/' element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                  </Route>

                </Routes>


                {/* Dashboard routes  */}
                <Routes>
                 <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='add-product' element={<ProductAdd />} />
                    <Route path='view-product' element={<ViewProduct/>} />
                  </Route>
                  
              </Routes>
              {/* End routes  */}
            

            </BrowserRouter>
    </div>
  )
}

export default App
