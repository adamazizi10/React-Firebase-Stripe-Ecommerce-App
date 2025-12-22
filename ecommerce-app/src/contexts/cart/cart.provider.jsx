import { CartContext } from "./cart.context";
import { useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";

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

const CART_ACTION_TYPES = {
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (prevState, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
            return {
                ...prevState,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...prevState,
                ...payload
            }
        default:
            throw new Error(`type of ${type} not found`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
}


export const CartProvider = ({ children }) => {

    const [currentState, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const { cartItems, cartCount, totalPrice, isCartOpen } = currentState


    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0);

        const newTotalPrice = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);

        dispatch(createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: newCartCount,
            totalPrice: newTotalPrice,
        }))
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, {isCartOpen: bool}))
    }



    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const subtractItemFromCart = (cartItemToRemove) => {
        const newCartItems = subtractCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const deleteItemFromCart = (productToClear) => {
        const newCartItems = deleteCartItem(cartItems, productToClear)
        updateCartItemsReducer(newCartItems)
    }



    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, subtractItemFromCart, deleteItemFromCart, cartCount, totalPrice }



    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}