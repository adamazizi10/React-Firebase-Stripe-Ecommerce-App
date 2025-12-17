import { CartContext } from "./cart.context";
import { useState, useEffect } from "react";

export const CartProvider = ({ children }) => {

    const deleteCartItem = (cartItems, productToClear) => {
        return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
    }

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

    const subtractCartItem = (cartItems, cartItemToRemove) => {

        const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

        if (existingItem.quantity === 1) {
            return deleteCartItem(cartItems, cartItemToRemove)

        }

        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )


    }
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const subtractItemFromCart = (cartItemToRemove) => {
        setCartItems(subtractCartItem(cartItems, cartItemToRemove))
    }

    const deleteItemFromCart = (productToClear) => {
        setCartItems(deleteCartItem(cartItems, productToClear))
    }

    useEffect(() => {
        const totalQuantityCount = cartItems.reduce((total, item) => total + item.quantity, 0);

        setCartCount(totalQuantityCount);

    }, [cartItems]);

    useEffect(() => {
        const totalCostCount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

        setTotalPrice(totalCostCount);

    }, [cartItems]);


    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, subtractItemFromCart, deleteItemFromCart, cartCount, totalPrice }



    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}