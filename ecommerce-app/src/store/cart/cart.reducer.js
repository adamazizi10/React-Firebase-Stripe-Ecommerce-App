import { createSlice } from '@reduxjs/toolkit'

const deleteItemFromCart = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}

const addItemToCart = (cartItems, productToAdd) => {
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

const subtractItemFromCart = (cartItems, cartItemToRemove) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    if (existingItem.quantity === 1) {
        return deleteItemFromCart(cartItems, cartItemToRemove)

    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )


}

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
        addCartItem(state, action) {
            state.cartItems = addItemToCart(state.cartItems, action.payload)
        },
        subtractCartItem(state, action) {
            state.cartItems = subtractItemFromCart(state.cartItems, action.payload)
        },
        deleteCartItem(state, action) {
            state.cartItems = deleteItemFromCart(state.cartItems, action.payload)
        }
    }
})

export const { setIsCartOpen, addCartItem, subtractCartItem, deleteCartItem } = cartSlice.actions

export const cartReducer = cartSlice.reducer

// import { CART_ACTION_TYPES } from './cart.type'


// export const cartReducer = (prevState = CART_INITIAL_STATE, action = {}) => {
//     const { type, payload } = action

//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return {
//                 ...prevState,
//                 ...payload
//             }
//         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//             return {
//                 ...prevState,
//                 ...payload
//             }
//         default:
//             return prevState
//     }
// }
