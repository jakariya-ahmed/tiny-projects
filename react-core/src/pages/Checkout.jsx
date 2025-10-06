import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {

    const {cart, clearCart}= useCart();
    const [checkoutForm, setCheckoutForm] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        payment: 'cod', // default cash on delivery
    });



    return (
        <h1> checkout </h1>
    );
}