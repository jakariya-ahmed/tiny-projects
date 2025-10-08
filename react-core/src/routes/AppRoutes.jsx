import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Products from "../pages/Products";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import Core from "../pages/Core";
import SingleProduct from "../pages/SingleProduct";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home /> } /> 
            <Route path="posts" element={<Posts /> }/>
            <Route path="products" element={<Products /> }/>
            <Route path="core" element={<Core/> }/>
            {/* shop  */}
            <Route path="shop" element={<Shop />} /> 
            {/* Cart  */}
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-success" element={<Success />} />
            {/* Single Product  */}
            <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
    );
}