import { CartContext } from "./cart.context";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = { isCartOpen, setIsCartOpen}
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}