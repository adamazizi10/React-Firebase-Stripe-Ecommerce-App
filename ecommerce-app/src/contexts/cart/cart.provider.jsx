import { CartContext } from "./cart.context";
import { useState, useEffect } from "react";

export const CartProvider = ({ children }) => {

    const addCartItem = (cartItems, productToAdd) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

        if (existingItem) {
            return cartItems.map((cartItem) =>
                cartItem.id === productToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        }

        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

        setCartCount(totalCount);

    }, [cartItems]);


    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount }



    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}