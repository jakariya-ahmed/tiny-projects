import { pre } from "framer-motion/client";
import { Children, createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        // console.log(product.id);
        setCart((prev) => {
            // Check if already exists
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) => 
                    item.id === product.id ? 
                    {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...prev, {...product, quantity: 1}];
        });
    };

    // Remove item
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    // Update quantity
    const updateQty = (id, qty) => {
        setCart((prev) => prev.map((item) =>
            item.id === id ? {...item, quantity:Math.max(1, qty)} : item
        ));
    }

    // Clear cart
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
        value={{cart, addToCart, removeFromCart, updateQty, clearCart}}
        >
            {children}
            
        </CartContext.Provider>
    );

}

// Hook to use cart
export const useCart = () => useContext(CartContext);




