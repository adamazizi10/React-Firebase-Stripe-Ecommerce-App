import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    subtractItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCount: 0,
    setCartCount: () => {},
    totalPrice: 0,
    setTotalPrice: () => {},
})