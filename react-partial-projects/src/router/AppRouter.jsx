
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/AboutPage'
import ProductAdd from '../pages/dashboard/ProductAddPage'
import ViewProduct from '../pages/dashboard/ViewProductPage';
import DashboardLayout from '../pages/dashboard/DashboardLayout'
import HomeLayout from '../pages/HomeLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import NotFound from '../pages/NotFound'
import SinglePost from '../pages/dashboard/post/SinglePost'


function AppRouter() {

  return (
    <Routes>

        {/* Home routes  */}
        <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
        </Route>



        {/* Dashboard routes  */}
        <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-product' element={<ProductAdd />} />
            <Route path='view-product' element={<ViewProduct/>} />
            <Route path='post/:id' element={<SinglePost /> } />
        </Route>
        
        <Route path='*' element={<NotFound />}/>
        
    </Routes>
    
  )
}

export default AppRouter
