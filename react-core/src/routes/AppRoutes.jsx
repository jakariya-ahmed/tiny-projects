import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Products from "../pages/Products";
import Shop from "../pages/Shop";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home /> } /> 
            <Route path="posts" element={<Posts /> }/>
            <Route path="products" element={<Products /> }/>

            {/* shop  */}
            <Route path="shop" element={<Shop />} /> 
        </Routes>
    );
}